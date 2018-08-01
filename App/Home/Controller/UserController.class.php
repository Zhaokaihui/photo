<?php
namespace Home\Controller;
use Think\Controller;
class UserController extends Controller {
//     public function _before_index(){
//         echo 'beforeIndex';
//     }
    public function user(){
        header("Content-type: text/html; charset=utf-8");
        $name = $_GET['id'];
        echo U('Blog/cate','cate_id=1&status=1','xml');
        echo 'id:'.$name;
    }
    
//     public function _after_index(){
//         echo 'afterIndex';
//     }
    
    public function aaa(){
        echo '这是aaa控制器';
    }
}