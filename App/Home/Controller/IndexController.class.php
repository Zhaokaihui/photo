<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller{
 	public function index(){
 		$Model=new \Admin\Model\AdminModel();
 		//$user=$Model->getCount('User');
 		//$project=$Model->getCount('Project');
 		$user = M('admin');
 		$data['id']='7';
 		$data['admin_name']='root3';
 		$data['password'] = md5('222222');
//  		$data['insert_time']=date('Y-m-d H:i:s',time());
 		$userList = $user->getField('admin_name',true);
 		$admin = $Model->table('User')->page(1,2)->select();
 		$task=$Model->getCount('Admin');
 		$list=[$task];
 		$this->assign('list',$list);
 		$this->display();	
 	}
}
?>