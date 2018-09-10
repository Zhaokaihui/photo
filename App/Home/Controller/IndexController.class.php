<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller{
    public function index(){
        $Model=new \Home\Model\IndexModel();
 		$indexAlbumList = $Model->getIndexAlbumList();
 		$this->assign('indexAlbumList',$indexAlbumList);
 		$this->display();	
 	}
 	
 	/*
 	 * 显示微信二维码
 	 */
 	public function wechat_img(){
 	    $this->display();
 	}
 	
 	/*
 	 * 照片展示页
 	 */
 	public function photo_show1(){
 	    $album_id = $_GET['album_id'];
 	    $Photo = D('photo');
 	    $photo_list = $Photo
 	    ->join('photo_album_relation ON photo_album_relation.photo_id = photo.id')
 	    ->where("photo_album_relation.album_id='%d'",$album_id)
 	    ->order(array('photo.sort'=>'desc','photo.id'=>'asc'))
 	    ->select();
 	    
 	    if(!empty($photo_list) && is_array($photo_list)){
 	        $i = 0;
 	        foreach($photo_list as $key => $val){
 	            $photo_list[$key]['data-slide-to'] = $i;
 	            $i++;
 	        }
 	    }
 	    $this->assign('photo_list',$photo_list);
 	    $this->display();
 	}
 	
 	/*
 	 * 照片展示页
 	 */
 	public function photo_show(){
 	    $album_id = $_GET['album_id'];
 	    $Photo = D('photo');
 	    $photo_list = $Photo
 	    ->join('photo_album_relation ON photo_album_relation.photo_id = photo.id')
 	    ->where("photo_album_relation.album_id='$album_id' and photo.is_delete = 0")
 	    ->order(array('photo.sort'=>'desc','photo.id'=>'asc'))
 	    ->select();
 	
 	    if(!empty($photo_list) && is_array($photo_list)){
 	        $i = 0;
 	        foreach($photo_list as $key => $val){
 	            $photo_list[$key]['data-slide-to'] = $i;
 	            $i++;
 	        }
 	    }
 	    $this->assign('photo_list',$photo_list);
 	    $this->display();
 	}
}
?>