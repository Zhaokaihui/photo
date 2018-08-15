<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>

<link rel="stylesheet" href="/Public/CSS/index.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/Public/CSS/add.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/Public/CSS/admin.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/Public/iconv/css/font-awesome.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/Public/CSS/Page.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/Public/CSS/lyq-list.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/Public/CSS/master.css" media="screen">
<link rel="stylesheet" href="/Public/CSS/reset.css" media="screen">
<script type="text/javascript" src="/Public/JS/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="/Public/JS/tendina.min.js"></script>
<script type="text/javascript" src="/Public/JS/common.js"></script>
<script type="text/javascript" src="/Public/JS/bootstrap.min.js"></script>

</head>
<body>
    <!--顶部-->
    <div class="layout_top_header">
            <div style="float: left"><span style="font-size: 16px;line-height: 45px;padding-left: 20px;color: #8d8d8d">大屌丝管理后台</h1></span></div>
            <div id="ad_setting" class="ad_setting">
                <a class="ad_setting_a" href="javascript:; ">
                    <i class="icon-user glyph-icon" style="font-size: 20px"></i>
                    <span>管理员</span>
                    <i class="icon-chevron-down glyph-icon"></i>
                </a>
                <ul class="dropdown-menu-uu" style="display: none" id="ad_setting_ul">
                    <li class="ad_setting_ul_li"> <a href="<?php echo U('Index/person');?>"><i class="icon-user glyph-icon"></i> 个人中心 </a> </li>
                    <!-- <li class="ad_setting_ul_li"> <a href="javascript:;"><i class="icon-cog glyph-icon"></i> 设置 </a> </li> -->
                    <li class="ad_setting_ul_li"> <a href="<?php echo U('Home/Index/index');?>"><i class="icon-signout glyph-icon"></i> <span class="font-bold">退出</span> </a> </li>
                </ul>
            </div>
    </div>
    <!--顶部结束-->
    <!--菜单-->
    <div class="layout_left_menu">
        <ul id="menu">
            <li class="childUlLi">
               <a href="<?php echo U('Index/index');?>"><i class="glyph-icon icon-home"></i>首页</a>
                <!-- <ul>
                    <li><a href="<?php echo U('Index/user_count');?>" class='admin-btn'><i class="glyph-icon icon-chevron-right"></i>会员统计</a></li>
                    <li><a href="<?php echo U('Index/project_count');?>"><i class="glyph-icon icon-chevron-right"></i>项目统计</a></li>
                    <li><a href="<?php echo U('Index/task_count');?>"><i class="glyph-icon icon-chevron-right"></i>任务统计</a></li>
                </ul> -->
            </li>
            <li class="childUlLi">
                <a href="#"  target="menuFrame"> <i class="glyph-icon icon-reorder"></i>相册管理</a>
                <ul>
                    <li><a href="<?php echo U('Index/album_list');?>"><i class="glyph-icon icon-chevron-right"></i>相册列表</a></li>
                    <li><a href="<?php echo U('Index/album_add');?>"><i class="glyph-icon icon-chevron-right"></i>相册添加</a></li>
                </ul>
            </li>
            <li class="childUlLi">
                <a href="#"  target="menuFrame"> <i class="glyph-icon icon-reorder"></i>照片管理</a>
                <ul>
                    <li><a href="<?php echo U('Index/photo_list');?>"><i class="glyph-icon icon-chevron-right"></i>照片列表</a></li>
                    <li><a href="<?php echo U('Index/photo_add');?>"><i class="glyph-icon icon-chevron-right"></i>照片添加</a></li>
                </ul>
            </li>
            <li class="childUlLi">
                <a href="#"  target="menuFrame"> <i class="glyph-icon icon-reorder"></i>用户管理</a>
                <ul>
                    <li><a href="<?php echo U('Index/user_add');?>"><i class="glyph-icon icon-chevron-right"></i>用户添加</a></li>
                    <li><a href="<?php echo U('Index/user_list');?>"><i class="glyph-icon icon-chevron-right"></i>用户列表</a></li>
                </ul>
            </li>
            <li class="childUlLi">
                <a href="#" target="menuFrame"> <i class="glyph-icon icon-reorder"></i>角色管理</a>
                <ul>
                    <li><a href="<?php echo U('Index/user_edit');?>"><i class="glyph-icon icon-chevron-right"></i>用户修改</a></li>
                </ul>
            </li>
            <!-- <li class="childUlLi">
                <a href="#"> <i class="glyph-icon  icon-location-arrow"></i>菜单管理</a>
                <ul>
                    <li><a href="meunbox.html" target="menuFrame"><i class="glyph-icon icon-chevron-right"></i>平台菜单</a></li>
                    <li><a href="meunbox_add.html" target="menuFrame"><i class="glyph-icon icon-chevron-right"></i>运行商菜单</a></li>
                    <li><a href="#" target="menuFrame"><i class="glyph-icon icon-chevron-right"></i>服务站菜单</a></li>
                    <li><a href="#" target="menuFrame"><i class="glyph-icon icon-chevron-right"></i>商家菜单</a></li>
                </ul>
            </li> -->
        </ul>
    </div>
    <!--菜单-->
    <div id="layout_right_content" class="layout_right_content">

        <div class="route_bg">
            <a href="<?php echo U('Index/index');?>" id='admin-index'>主页</a><i class="glyph-icon icon-chevron-right"></i>
            <a id='admin-type'>用户列表</a>
        </div>
        <div class="mian_content">
            <div id="page_content">
                
<script type="text/javascript" src="/Public/JS/css-browser-select.js"></script>
    <div class="div_from_aoto" style="width: 1000px;">
        <div class='lyq-term'>
            <form method="get" action="<?php echo U('Index/user_list');?>">
                用户名称：<input type='text' name='by_name'/>
                用户状态：<select name="by_status"  style="height:30px;width:80px">
                    <option value="-1">--选择--</option>
                    <option value="0">正常</option>
                    <option value="1">禁用</option>
                </select>
                <button class="termButton" style="height:30px;width:80px">搜索</button>
            </form>
        </div>
        <div id="pageContainer">
            <div id="tableContainer">
            <?php if(is_array($list)): foreach($list as $key=>$val): ?><div class="tableCell" par=<?php echo ($val["User_id"]); ?>>
                    <div class="tableHeading">
                        <h2><?php echo ($val["User_name"]); ?></h2>
                        <div class="price1 priceContainer">
                            <img src='/Public/images/<?php echo ($val["Face"]); ?>'>
                        </div>
                    </div>
                </div><?php endforeach; endif; ?>
                
                <div class="cl"></div>
                    
                <table class="pricingTableContent">
                    <tr class="signUpRow">
                    <?php if(is_array($list)): foreach($list as $key=>$val): ?><td par=<?php echo ($val["User_id"]); ?> class="signUpButton"></td><?php endforeach; endif; ?>
                    </tr>

                    <!-- Table Content -->
                    <tr>
                    <?php if(is_array($list)): foreach($list as $key=>$val): ?><td par=<?php echo ($val["User_id"]); ?>><strong>邮箱：</strong><?php echo ($val["Email"]); ?></td><?php endforeach; endif; ?> 
                    </tr>

                    <tr class="altRow">
                    <?php if(is_array($list)): foreach($list as $key=>$val): ?><td par=<?php echo ($val["User_id"]); ?>><strong>电话：</strong><?php echo ($val["User_tel"]); ?></td><?php endforeach; endif; ?>
                    </tr>

                    <tr>
                    <?php if(is_array($list)): foreach($list as $key=>$val): ?><td par=<?php echo ($val["User_id"]); ?>><strong>简介：</strong><?php echo ($val["User_introduction"]); ?></td><?php endforeach; endif; ?>
                    </tr>

                    <tr class="altRow">
                    <?php if(is_array($list)): foreach($list as $key=>$val): ?><td par=<?php echo ($val["User_id"]); ?>><strong>状态：</strong><a class='admin-status'><?php echo ($val["Status"]); ?></a></td><?php endforeach; endif; ?>
                    </tr>

                    <tr>
                    <?php if(is_array($list)): foreach($list as $key=>$val): ?><td par=<?php echo ($val["User_id"]); ?>><strong>角色：</strong><a class='admin-role'><?php echo ($val["Role"]); ?></a></td><?php endforeach; endif; ?>
                    </tr>

                    <!-- Table Footer -->
                    <tfoot>
                        <tr>
                        <?php if(is_array($list)): foreach($list as $key=>$val): ?><td par=<?php echo ($val["User_id"]); ?>>
                                <a href="<?php echo U('Index/user_edit');?>" class="signUpButton">用户修改</a>
                            </td><?php endforeach; endif; ?>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <div class="quotes"><?php echo ($page); ?></div>
<script type="text/javascript">
    $('.tableCell').click(function(){
        $(this).addClass('recommended').siblings().removeClass('recommended').children().children('.price3').removeClass('price3').addClass('price1');
        $(this).children().children('.price1').addClass('price3').removeClass('price1');
        var par=$(this).attr('par');
        $("td[par='"+par+"']").addClass('recommended').siblings().removeClass('recommended');
    });
    $('.signUpButton').click(function(){
        var par=$(this).parent().attr('par');
        var url=$(this).attr('href');
        url=url+'?userid='+par;
        $(this).attr('href',url);
    });
    
</script>

            </div>
        </div>
    </div>
</body>
</html>