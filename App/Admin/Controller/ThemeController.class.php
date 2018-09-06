<?php
namespace Admin\Controller;
use Think\Controller;
class ThemeController extends Controller{
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
 	 * 主题列表
 	 */
 	function theme_list(){
 	    $Theme = D('theme');
 	    
 	    $p=$_GET['p']?$_GET['p']:1;
 	    //$list = $Theme->where($map)->select();
 	    
 	    //分页
 	    $count=$Theme->where()->count();
 	    $max=ceil($count/10);
 	    if($p>$max){
 	        $p=$max;
 	    }
 	    if($p<1){
 	        $p=1;
 	    }
 	    $list=$Theme->where()->order(array('sort'=>'desc','id'))->page($p.',10')->select();
 	    $Page=new \Think\Page($count,10);
 	    $show=$Page->show();
 	    
 	    $this->assign('page',$show);
 	    $this->assign('list',$list);
 	    $this->display('theme_list');
 	}
 	
 	/**
 	 * 修改相册信息
 	 */
 	function theme_edit(){
 		if(!empty($_GET['id'])){
 			$id=$_GET['id'];
 			$Model=D('Theme');
 			$result=$Model->where('id=%d',$id)->find();
 			$this->assign('result',$result);
 			$this->display('theme_edit');
 		}
 	}
 	
 	/**
 	 * 修改相册视图
 	 */
 	function theme_update(){
 	    if(!empty($_POST['id'])){
 	        $id = $_POST['id'];
 	        
 	        $Model=D('theme');
 			$data['theme_name']=$_POST['theme_name'];
 			$data['sort']=$_POST['sort'];
 			$data['is_delete']=$_POST['is_delete'];
 			$data['update_time'] = date('Y-m-d H:i:s',time());
 			
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
 	function theme_del(){
 	    $id = $_GET['id'];
 	    $Model=D('theme');
 	    $oldImage = $Model->where('id=%d',$id)->field('theme_image')->find();
 	    $result = $Model->where('id=%s',$id)->delete();
 	    if($result){
 	        //删除旧图片
 	        unlink('./Public/images/themeImg/'.$oldImage['theme_image']);
 	        $return = array('msg'=>'删除成功！');
 	    }else{
 	        $return = array('msg'=>'删除失败！');
 	    }
 	    $this->ajaxReturn($return);
 	}
 	
 	/**
 	 * 添加相册
 	 */
 	function theme_add(){
 	    if($_POST['is_add'] == 1){
 	        $Model=D('theme');
 	        $data['theme_name']=$_POST['theme_name'];
 	        $data['sort']=$_POST['sort'];
 	        $data['is_delete']=$_POST['is_delete'];
 	        $data['theme_introduce'] = $_POST['theme_introduce'];
 	        $data['update_time'] = date('Y-m-d H:i:s',time());
 	        
 	        //上传图片
 	        $upload = new \Think\Upload();
 	        $upload->exts=array('jpg', 'gif', 'png', 'jpeg');
 	        $upload->rootPath='./Public/images/themeImg/';
 	        $info=$upload->upload();
 	        if(!empty($info)){
 	            $data['theme_image'] = $info['image']['savepath'].$info['image']['savename'];
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
 	
 	/**
 	 * 关联照片列表
 	 */
 	function relation_photo_list(){
 	    $themeId = $_GET['id'];
 	    $Theme = D('theme');
 	    $Photo = d('photo');
 	    
 	    $p=$_GET['p']?$_GET['p']:1;
 	    //$list = $Theme->where($map)->select();
 	    
 	    //分页
 	    $count=$Photo->join('photo_theme_relation ON photo_theme_relation.photo_id = photo.id')->where("photo_theme_relation.theme_id='%d'",$themeId)->count();
 	    $max=ceil($count/10);
 	    if($p>$max){
 	        $p=$max;
 	    }
 	    if($p<1){
 	        $p=1;
 	    }
 	    
 	    $list = $Photo
 	    ->join('photo_theme_relation ON photo_theme_relation.photo_id = photo.id')
 	    ->where("photo_theme_relation.theme_id='%d'",$themeId)
 	    ->select();
 	    
 	    $Page=new \Think\Page($count,10);
 	    $show=$Page->show();
 	    
 	    foreach($list as $key => $val){
            if($val['photo_image'] == '')
                $list[$key]['photo_image'] = 'default.png';
 	    }
 	    $this->assign('theme_id',$themeId);
 	    $this->assign('page',$show);
 	    $this->assign('list',$list);
 	    $this->display('relation_photo_list');
 	}
 	
 	/**
 	 * 删除相册
 	 */
 	function relation_photo_del(){
 	    $id = $_GET['id'];
 	    $Model=D('photo_theme_relation');
 	    $result = $Model->where('id=%s',$id)->delete();
 	    if($result){
 	        $return = array('msg'=>'删除成功！');
 	    }else{
 	        $return = array('msg'=>'删除失败！');
 	    }
 	    $this->ajaxReturn($return);
 	}
 	
 	/**
 	 * 添加关联照片
 	 */
 	function relation_photo_add(){
 	    $theme_id = $_GET['theme_id'];
 	    $Photo = d('photo');
 	    
 	    $exislist = $Photo
 	    ->join('photo_theme_relation ON photo_theme_relation.photo_id = photo.id')
 	    ->field('photo_theme_relation.photo_id')
 	    ->where("photo_theme_relation.theme_id='%d'",$theme_id)
 	    ->select();
 	    
 	    $list = $Photo->select();
 	    
 	    if(!empty($list) && is_array($list)){
 	        foreach ($list as $key => $val){
 	            if(!empty($exislist) && is_array($exislist)){
 	                foreach ($exislist as $k => $v){
 	                    if($val['id'] == $v['photo_id']){
 	                        unset($list[$key]);
 	                    }
 	                }
 	            }
 	        }
 	    }
 	    $list = array_values($list);
 	    $this->assign('list',$list);
 	    $this->display('');
 	}
	
}
?>