<?php
	namespace Home\Model;
	use Think\Model;
	class IndexModel extends Model{
	    protected $tablePrefix = ''; 
	    protected $tableName = 'album'; 
	    
		function getCount($tab){
			$Model=D($tab);
			$list=$Model->select();
			return count($list);
		}

		/**
		 * 获取首页相册列表
		 */
		function getIndexAlbumList(){
		    $Album = D('album');
		    $Theme = D('theme');
// 		    $list = $Album
// 		    ->field('album.*')
// 		    ->join('left join photo_album_relation ON photo_album_relation.album_id = album.id')
// 		    ->where("album.is_delete=0 and photo_album_relation.album_id <> ''")
// 		    ->order(array('album.sort'=>'desc','album.id'=>'asc'))
// 		    ->group('album.id')
// 		    ->select();
		    
		    $list = $Theme
		    ->where("theme.is_delete=0")
		    ->order(array('theme.sort'=>'desc','theme.id'=>'asc'))
		    ->limit(4)->select();

		    return $list;
		}
		
		/**
		 * 获取首页主题列表（排序最靠前的三个主题）
		 */
		function getIndexThemeList(){
		    $Theme = D('theme');
		    
		    $list = $Theme
		    ->where("theme.is_delete=0")
		    ->order(array('theme.sort'=>'desc','theme.id'=>'asc'))
		    ->limit(4)->select();
		    
		    return $list;
		}
		
	}

?>