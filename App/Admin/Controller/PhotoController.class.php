<?php
namespace Admin\Controller;
use Think\Controller;
class PhotoController extends Controller{
 	function index(){
 		$Model=new \Admin\Model\AdminModel();
 		$user=1;
 		$project=2;
 		$task=3;
 		$list=[$user,$project,$task];
 		$this->assign('list',$list);
 		$this->display();	
 	}
 	
 	/**
 	 * 照片列表
 	 */
 	function photo_list(){
 	    $Photo = D('photo');
 	    $map['is_delete'] = 0;
 	    
 	    $p=$_GET['p']?$_GET['p']:1;
 	    //$list = $Photo->where($map)->select();
 	    
 	    //分页
 	    $count=$Photo->where()->count();
 	    $max=ceil($count/10);
 	    if($p>$max){
 	        $p=$max;
 	    }
 	    if($p<1){
 	        $p=1;
 	    }
 	    $list=$Photo->where()->order('id')->page($p.',10')->select();
 	    $Page=new \Think\Page($count,10);
 	    $show=$Page->show();
 	    
 	    foreach($list as $key => $val){
 	        if($val['photo_image'] == '')
 	            $list[$key]['photo_image'] = 'default.png';
 	    }
 	    $this->assign('page',$show);
 	    $this->assign('list',$list);
 	    $this->display('photo_list');
 	}
 	
 	/**
 	 * 修改照片信息
 	 */
 	function photo_edit(){
 		if(!empty($_GET['id'])){
 			$id=$_GET['id'];
 			$Model=D('Photo');
 			$result=$Model->where('id=%d',$id)->find();
 			$this->assign('result',$result);
 			$this->display('photo_edit');
 		}
 	}
 	
 	/**
 	 * 修改照片视图
 	 */
 	function photo_update(){
 	    if(!empty($_POST['id'])){
 	        $id = $_POST['id'];
 	        
 	        $Model=D('photo');
 	        $oldImage = $Model->where('id=%d',$id)->field('photo_image')->find();
 			$data['sort']=$_POST['sort'];
 			$data['is_delete']=$_POST['is_delete'];
 			$data['update_time'] = date('Y-m-d H:i:s',time());

 			//上传图片
 			$upload = new \Think\Upload();
 			$upload->exts=array('jpg', 'gif', 'png', 'jpeg');
 			$upload->rootPath='./Public/images/photoImg/';
 			$info=$upload->upload();
 			$data['photo_image'] = '';
 			if(!empty($info)){
 			    $data['photo_image'] = $info['image']['savepath'].$info['image']['savename'];
 			    
 			    //删除旧图片
 			    if($oldImage['photo_image'] != $data['photo_image'] && $data['photo_image'] != ''){
 			        unlink('./Public/images/photoImg/'.$oldImage['photo_image']);
 			    }
 			}
 			
 			
 			$result = $Model->where('id=%s',$id)->save($data);
 			if($result){
 			    $return = array('msg'=>'修改成功！');
 			}else{
 			    $return = array('msg'=>'修改失败！');
 			}

 			$this->ajaxReturn($return);
 	    }
 	}
 	
 	/**
 	 * 删除照片
 	 */
 	function photo_del(){
 	    $id = $_GET['id'];
 	    $Model=D('photo');
 	    $oldImage = $Model->where('id=%d',$id)->field('photo_image')->find();
 	    $result = $Model->where('id=%s',$id)->delete();
 	    if($result){
 	        //删除旧图片
 	        unlink('./Public/images/photoImg/'.$oldImage['photo_image']);
 	        $return = array('msg'=>'删除成功！');
 	    }else{
 	        $return = array('msg'=>'删除失败！');
 	    }
 	    $this->ajaxReturn($return);
 	}
 	
 	/**
 	 * 添加照片
 	 */
 	function photo_add(){
 	    if($_POST['is_add'] == 1){
 	        $Model=D('photo');
 	        $data['sort']=$_POST['sort'];
 	        $data['is_delete']=$_POST['is_delete'];
 	        $data['update_time'] = date('Y-m-d H:i:s',time());
 	        
 	        //上传图片
 	        $upload = new \Think\Upload();
 	        $upload->exts=array('jpg', 'gif', 'png', 'jpeg');
 	        $upload->rootPath='./Public/images/photoImg/';
 	        $info=$upload->upload();
 	        if(!empty($info)){
 	            $data['photo_image'] = $info['image']['savepath'].$info['image']['savename'];
 	        }
 	        $result = $Model->add($data);
 	        if($result){
 	            $return = array('msg'=>'添加成功！');
 	        }else{
 	            $return = array('msg'=>'添加失败！');
 	        }
 	        $this->ajaxReturn($return);
 	    }else{
 	        $this->display();
 	    }
 	}
	
}
?>