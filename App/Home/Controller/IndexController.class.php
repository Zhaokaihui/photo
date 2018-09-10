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
 	 * 首页相册列表
 	 */
 	public function album_show(){
 	    $Album = D('album');
 	    $Theme = D('theme');
 	    $Relation = D('album_theme_relation');
 	    $theme_list = $Theme->where('is_delete=%d',0)->select();
 	    
 	    $album_list = $Album
 	    ->field('album.*')
 	    ->join('left join photo_album_relation ON photo_album_relation.album_id = album.id')
 	    ->where("album.is_delete=0 and photo_album_relation.album_id <> ''")
 	    ->order(array('album.sort'=>'desc','album.id'=>'asc'))
 	    ->group('album.id')
 	    ->select();

 	    //获取相册对应的主题id
 	    if(!empty($album_list) && is_array($album_list)){
 	        foreach ($album_list as $key => $val){
 	            $album_list[$key]['theme_ids'] = '';
 	            $album_from_theme = $Relation
 	            ->field('theme_name')
 	            ->join('theme ON theme.id = album_theme_relation.theme_id')
 	            ->where("album_theme_relation.album_id='%d'",$val['id'])
 	            ->select();
 	            if(!empty($album_from_theme)){
 	                foreach ($album_from_theme as $k => $v){
 	                    $album_list[$key]['theme_names'] .=$v['theme_name'].',';
 	                }
 	                $album_list[$key]['theme_names'] = trim($album_list[$key]['theme_names'],',');
 	            }
 	        }
 	    }
 	    $this->assign('theme_list',$theme_list);
 	    $this->assign('album_list',$album_list);
 	    $this->display();
 	}
}
?>