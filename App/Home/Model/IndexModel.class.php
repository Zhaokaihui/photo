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

		function judge($email){
			$Model=D('User');
			$map['Email']=$email;
			$judge=$Model->where($map)->select();
			return $judge[0];
		}

		function doSign($email,$pwd,$role){
			/*数据库存储*/
			$judge=$this->judge($email);
			if($judge){
				return false;
			}else{
				$data['User_name']=$email;
				$data['Email']=$email;
				$data['Pwd']=$pwd;
				$data['Face']='default.jpg';
				$data['Status']=0;
				$data['Role']=$role;
				$Model=D('User');
				$result=$Model->data($data)->add();
				return $result;
			}
		}
		
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
	}

?>