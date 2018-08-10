<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller{
 	function index(){
 		$Model=new \Admin\Model\AdminModel();
 		$user=1;
 		$project=2;
 		$task=3;
 		$list=[$user,$project,$task];
 		$this->assign('list',$list);
 		$this->display();	
 	}

 	function user_edit(){
 		if(!empty($_POST['email'])){
 			$email=$_POST['email'];
 			$role=$_POST['role'];
 			$status=$_POST['status'];
 			$Model=D('User');
 			$data['Status']=$status;
 			$data['Role']=$role;
			$Model->where('Email=%s',"'"+$email+"'")->save($data);
 		}
 		if(!empty($_GET['userid'])){
 			$userid=$_GET['userid'];
 			$Model=D('User');
 			$result=$Model->where('User_id=%d',$userid)->find();
 			$this->assign('result',$result);
 		}
 		$this->display();
 			
 	}

 	function user_add(){
 		if(!empty($_POST['email'])){
 			$email=$_POST['email'];
 			$pwd=md5($_POST['pwd']);
 			$role=$_POST['role'];
 			$Model=new \Admin\Model\AdminModel();
 			$sign=$Model->doSign($email,$pwd,$role);
 		}
 		$this->display();	
 	}

 	function exist(){
 		$email=$_GET['email'];
 		$Model=new \Admin\Model\AdminModel();
 		$judge=$Model->judge($email);
 		$this->ajaxReturn($judge);
 	}

 	function doSignup(){
 		$email=$_GET['email'];
 		$pwd=$_GET['passwd'];
 		$role=$_GET['role'];
 		$Model=new \Admin\Model\AdminModel();
 		$bool=$Model->doSign($email,md5($pwd),$role);
 		if($bool){
 			/*发送邮件*/
			$str="恭喜您成功注册本网站账号,您的注册邮箱是:{$email},请点登录账号,并完善个人信息";
			SendMail($email,'注册成功',$str);
			$this->display('user_add');
 		}else{
 			$this->error('注册失败');
 		}
 	}

 	function user_list(){
 		$User=M('User');
 		$p=$_GET['p']?$_GET['p']:1;

 		$name=$_GET['by_name']?$_GET['p']:null;
 		$map['Role']=array('lt',$_SESSION['User']['Role']);
 		if(!empty($_GET['by_status'])){
 			$map['Status']=array('gt',$_GET['by_status']);
 		}
 		if(!empty($_GET['by_name'])){
 			$map['User_name']=array('like',$_GET['by_name']."%");
 		}

 		$count=$User->where($map)->count();
 		$max=ceil($count/4);
 		if($p>$max){
 			$p=$max;
 		}
 		if($p<1){
 			$p=1;
 		}
 		$list=$User->where($map)->order('User_id')->page($p.',4')->select();
 		$status=['正常','禁用'];
 		$role=['普通会员','管理员'];
 		foreach($list as $key=>$val){
 			$list[$key]['Status']=$status[$val['Status']];
 			$list[$key]['Role']=$role[$val['Role']];
 		}
 		$this->assign('list',$list);
 		$Page=new \Think\Page($count,4);
 		$show=$Page->show();
 		$this->assign('page',$show);
 		$this->display();
 	}

 	function getUserById($id){
 		$Model=D('User');
 		$judge=$Model->where('User_id=%s',$id)->find();
 		$this->ajaxReturn($judge);
 	}

 	function person(){
 		$id=$_SESSION['User']['User_id'];
 		$pwd=$_GET['pwd'];
 		$User=D('User');
 		$list=$User->where('User_id=%d',$id)->find();
 		$this->display();
 	}

 	function person_edit(){
 		$id=$_SESSION['User']['User_id'];
 		$upload = new \Think\Upload();
 		$upload->exts=array('jpg', 'gif', 'png', 'jpeg');
 		$upload->rootPath='./Public/images/';
 		$info=$upload->upload();
 		$face=$info['face']['savepath'].$info['face']['savename'];
 		$data['User_name']=$_POST['username'];
 		$data['User_tel']=$_POST['tel'];
 		if($face){
 			$data['Face']=$face;
 		}
 		$User=D('User');
 		$User->where('User_id=%d',$id)->save($data);
 		$this->display('person');
 	}

 	function pwd_edit(){
 		$id=$_SESSION['User']['User_id'];
 		$oldpwd=$_GET['oldpwd'];
 		$newpwd=$_GET['newpwd'];
 		$User=D('User');
 		$list=$User->where('User_id=%d',$id)->find();
 		if($oldpwd!=null && $list['Pwd']==md5($oldpwd)){
 			if($oldpwd==$newpwd){
 				$this->error('密码重复');
 			}else{
 				$data['Pwd']=md5($newpwd);
 				$User->where('User_id=%d',$id)->save($data);
 				$this->display('person');
 			}
 		}else{
 			$this->error('密码错误');
 		}	
 	}
	
}
?>