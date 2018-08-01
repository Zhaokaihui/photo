<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2014 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用入口文件

// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');

// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false

define('APP_PATH', './App/');
// define('COMMON_PATH', './Common/');
define('APP_DEBUG',TRUE);

require './ThinkPHP/ThinkPHP.php';

// define('BIND_MODULE','Admin');                       //生成模块、绑定模块
// define('BUILD_CONTROLLER_LIST','Index,User,Menu');   //生成控制器
// \Think\Build::buildModel('Admin','Role');            //生成模块、绑定模块
// \Think\Build::buildController('Admin','Role');       //生成控制器

// 亲^_^ 后面不需要任何代码了 就是如此简单