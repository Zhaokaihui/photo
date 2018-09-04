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
 	
 	public function wechat_img(){
 	    $this->display();
 	}
}
?>