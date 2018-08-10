<?php
	namespace Login\Model;
	use Think\Model;
	class LoginModel extends Model{
		function doLogin($email,$pwd){
			$Model=D('User');
			$map['Email']=$email;
			$map['Pwd']=$pwd;
			$data['Visit_time']=time();
			$Model->where($map)->save($data);
			$User_list=$Model->where($map)->find();
			return $User_list;
		}
	}

?>