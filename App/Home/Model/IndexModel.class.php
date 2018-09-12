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

		/*
		 * 获取首页相册列表
		 */
		function getIndexAlbumList(){
		    $Album = D('album');
		    $list = $Album
		    ->field('album.*')
		    ->join('left join photo_album_relation ON photo_album_relation.album_id = album.id')
		    ->where("album.is_delete=0 and photo_album_relation.album_id <> ''")
		    ->order(array('album.sort'=>'desc','album.id'=>'asc'))
		    ->group('album.id')
		    ->select();

		    return $list;
		}
		
		/**
		 * 获取首页主题列表
		 */
		function getIndexThemeList(){
		    
		}
		
	}

?>