<?php
namespace Admin\Model;
use Think\Model;
class AdminModel extends Model{
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
}

?>