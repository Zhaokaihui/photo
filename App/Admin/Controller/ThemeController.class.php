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
 	    $result = $Model->where('id=%s',$id)->delete();
 	    if($result){
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
 	        $data['update_time'] = date('Y-m-d H:i:s',time());
 	        
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
 	 * 关联相册列表
 	 */
 	function relation_album_list(){
 	    $themeId = $_GET['id'];
 	    $Theme = D('theme');
 	    $Album = d('album');
 	    
 	    $p=$_GET['p']?$_GET['p']:1;
 	    //$list = $Theme->where($map)->select();
 	    
 	    //分页
 	    $count=$Album->join('album_theme_relation ON album_theme_relation.album_id = album.id')->where("album_theme_relation.theme_id='%d'",$themeId)->count();
 	    $max=ceil($count/10);
 	    if($p>$max){
 	        $p=$max;
 	    }
 	    if($p<1){
 	        $p=1;
 	    }
 	    
 	    $list = $Album
 	    ->join('album_theme_relation ON album_theme_relation.album_id = album.id')
 	    ->where("album_theme_relation.theme_id='%d'",$themeId)
 	    ->select();
 	    
 	    $Page=new \Think\Page($count,10);
 	    $show=$Page->show();
 	    
 	    foreach($list as $key => $val){
            if($val['album_image'] == '')
                $list[$key]['album_image'] = 'default.png';
 	    }
 	    $this->assign('theme_id',$themeId);
 	    $this->assign('page',$show);
 	    $this->assign('list',$list);
 	    $this->display('relation_album_list');
 	}
 	
 	/**
 	 * 删除关联相册
 	 */
 	function relation_album_del(){
 	    $id = $_GET['id'];
 	    $Model=D('album_theme_relation');
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
 	function relation_album_add(){
 	    $theme_id = !empty($_GET['theme_id']) ? $_GET['theme_id'] : $_POST['theme_id'];
 	    $Album = D('album');
 	    $Relation = D('album_theme_relation');
 	    
 	    $exislist = $Album
 	    ->join('album_theme_relation ON album_theme_relation.album_id = album.id')
 	    ->field('album_theme_relation.album_id')
 	    ->where("album_theme_relation.theme_id='%d'",$theme_id)
 	    ->select();
 	    if(!empty($_GET['theme_id'])){
 	        $list = $Album->select();
 	        
 	        if(!empty($list) && is_array($list)){
 	            foreach ($list as $key => $val){
 	                if(!empty($exislist) && is_array($exislist)){
 	                    foreach ($exislist as $k => $v){
 	                        if($val['id'] == $v['album_id']){
 	                            unset($list[$key]);
 	                        }
 	                    }
 	                }
 	            }
 	        }
 	        $list = array_values($list);
 	        $this->assign('theme_id',$theme_id);
 	        $this->assign('list',$list);
 	        $this->display();
 	    }else{
 	        $album_ids = $_POST['album_ids'];
 	        $return = array('msg'=>'关联失败！请刷新页面，再勾选正确的照片');
 	        //删除已经存在的关联
 	        if(!empty($album_ids) && is_array($album_ids)){
 	            foreach($album_ids as $key => $val){
 	                if(!empty($exislist) && is_array($exislist)){
 	                    foreach ($exislist as $k => $v){
 	                        if($val == $v['album_id']){
 	                            unset($album_ids[$key]);
 	                        }
 	                    }
 	                }
 	            }
 	        }
 	        //插入新关联
 	        if(!empty($album_ids) && is_array($album_ids)){
 	            
 	            $data = array();
 	            $data['theme_id'] = $_POST['theme_id'];
 	            $insert_album_id = array();
 	            foreach($album_ids as $key => $val){
 	                $data['album_id'] = '';
 	                $data['album_id'] = $val;
 	                if(!empty($data['album_id'])){
 	                    $result = $Relation->add($data);
 	                    if($result){
 	                        $insert_album_id[] = $data['album_id'];
 	                    }
 	                }
 	            }
 	            if(!empty($insert_album_id) && is_array($insert_album_id)){
 	                $insert_album_id_str = join(',',$insert_album_id);
 	                $return = array('msg'=>'关联成功！已将编号为'.$insert_album_id_str.'的照片与该相册关联');
 	            }
 	        }
 	        $this->ajaxReturn($return);
 	    }
 	}
	
}
?>