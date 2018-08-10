<?php
	namespace Login\Model;
	use Think\Model;
	class SignupModel extends Model{
		function judge($email){
			$Model=D('User');
			$map['Email']=$email;
			$judge=$Model->where($map)->select();
			return $judge[0];
		}

		function doSign($email,$pwd){
			/*数据库存储*/
			$Model=D('User');
			$map['Email']=$email;
			$judge=$Model->where($map)->select();
			if($judge){
				return false;
			}else{
				$data['User_name']=$email;
				$data['Email']=$email;
				$data['Pwd']=$pwd;
				$data['Face']='default.jpg';
				$data['Status']=0;
				$result=$Model->data($data)->add();
				return $result;
			}
			
		}

		function setPwd($email,$pwd){
			$Model=D('User');
			$data['Pwd']=$pwd;
			$map['Email']=$email;
			$bool=$Model->where($map)->save($data);
			return $bool;
		}
	}
?>