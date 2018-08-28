<?php
namespace Admin\Controller;
use Think\Controller;
class AlbumController extends Controller{
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
 	 * 相册列表
 	 */
 	function album_list(){
 	    $Album = D('album');
 	    
 	    $p=$_GET['p']?$_GET['p']:1;
 	    //$list = $Album->where($map)->select();
 	    
 	    //分页
 	    $count=$Album->where()->count();
 	    $max=ceil($count/10);
 	    if($p>$max){
 	        $p=$max;
 	    }
 	    if($p<1){
 	        $p=1;
 	    }
 	    $list=$Album->where()->order('id')->page($p.',10')->select();
 	    $Page=new \Think\Page($count,10);
 	    $show=$Page->show();
 	    
 	    foreach($list as $key => $val){
 	        if (strlen($val['album_introduce'])>60) 
 	            $list[$key]['album_introduce']=substr($val['album_introduce'],0,60) . '...';
 	        if($val['album_image'] == '')
 	            $list[$key]['album_image'] = 'default.png';
 	    }
 	    $this->assign('page',$show);
 	    $this->assign('list',$list);
 	    $this->display('album_list');
 	}
 	
 	/**
 	 * 修改相册信息
 	 */
 	function album_edit(){
 		if(!empty($_GET['id'])){
 			$id=$_GET['id'];
 			$Model=D('Album');
 			$result=$Model->where('id=%d',$id)->find();
 			$this->assign('result',$result);
 			$this->display('album_edit');
 		}
 	}
 	
 	/**
 	 * 修改相册视图
 	 */
 	function album_update(){
 	    if(!empty($_POST['id'])){
 	        $id = $_POST['id'];
 	        
 	        $Model=D('album');
 	        $oldImage = $Model->where('id=%d',$id)->field('album_image')->find();
 			$data['album_name']=$_POST['album_name'];
 			$data['sort']=$_POST['sort'];
 			$data['is_delete']=$_POST['is_delete'];
 			$data['album_introduce'] = $_POST['album_introduce'];
 			$data['update_time'] = date('Y-m-d H:i:s',time());
 			
 			//上传图片
 			$upload = new \Think\Upload();
 			$upload->exts=array('jpg', 'gif', 'png', 'jpeg');
 			$upload->rootPath='./Public/images/albumImg/';
 			$info=$upload->upload();
 			$data['album_image'] = '';
 			if(!empty($info)){
 			    $data['album_image'] = $info['image']['savepath'].$info['image']['savename'];
 			    //删除旧图片
 			    if($oldImage['album_image'] != $data['album_image'] && $data['album_image'] != ''){
 			        unlink('./Public/images/albumImg/'.$oldImage['album_image']);
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
 	 * 删除相册
 	 */
 	function album_del(){
 	    $id = $_GET['id'];
 	    $Model=D('album');
 	    $oldImage = $Model->where('id=%d',$id)->field('album_image')->find();
 	    $result = $Model->where('id=%s',$id)->delete();
 	    if($result){
 	        //删除旧图片
 	        unlink('./Public/images/albumImg/'.$oldImage['album_image']);
 	        $return = array('msg'=>'修改成功！');
 	    }else{
 	        $return = array('msg'=>'删除失败！');
 	    }
 	    $this->ajaxReturn($return);
 	}
 	
 	/**
 	 * 添加相册
 	 */
 	function album_add(){
 	    if($_POST['is_add'] == 1){
 	        $Model=D('album');
 	        $data['album_name']=$_POST['album_name'];
 	        $data['sort']=$_POST['sort'];
 	        $data['is_delete']=$_POST['is_delete'];
 	        $data['album_introduce'] = $_POST['album_introduce'];
 	        $data['update_time'] = date('Y-m-d H:i:s',time());
 	        
 	        //上传图片
 	        $upload = new \Think\Upload();
 	        $upload->exts=array('jpg', 'gif', 'png', 'jpeg');
 	        $upload->rootPath='./Public/images/albumImg/';
 	        $info=$upload->upload();
 	        if(!empty($info)){
 	            $data['album_image'] = $info['image']['savepath'].$info['image']['savename'];
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