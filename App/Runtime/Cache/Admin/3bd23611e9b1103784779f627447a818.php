<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>大屌丝后台管理</title>

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
            <a id='admin-type'>角色管理</a>
        </div>
        <div class="mian_content">
            <div id="page_content">
                
    <div class="div_from_aoto" style="width: 500px;">
    <FORM method='post' action="<?php echo U('Index/user_edit');?>">
        <DIV class="control-group">
            <label class="laber_from">用户邮箱</label>
            <DIV  class="controls" ><INPUT class="input_from" type='email' name='email' placeholder=" 请输入注册邮箱"><P class=help-block></P></DIV>
        </DIV>
        <DIV class="control-group">
            <LABEL class="laber_from">状态</LABEL>
            <DIV  class="controls" >
                <SELECT class="input_select" name='status'>
                    <OPTION value='0'>正常</OPTION>
                    <OPTION value='1'>禁用</OPTION>
                </SELECT>
            </DIV>
        </DIV>
        <DIV class="control-group">
            <LABEL class="laber_from">角色</LABEL>
            <DIV  class="controls" >
                <SELECT class="input_select" name='role'>
                    <OPTION value='0'>普通会员</OPTION>
                    <?php if(($_SESSION['User']['Role'] == 2)): ?><OPTION value='1'>管理员</OPTION><?php endif; ?>
                </SELECT>
            </DIV>
        </DIV>
        <DIV class="control-group">
            <LABEL class="laber_from" ></LABEL>
            <DIV class="controls" ><input type='submit' class="btn btn-success" style="width:120px;" ></DIV>
        </DIV>
    </FORM>
</div>
<script type="text/javascript">
    var bool=0;
    $("input[name='email']").focusout(function(){
        var email=$(this).val();
        var str=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if(str.test(email)){
            $.get("<?php echo U('Index/exist');?>",{email:$(this).val()},function(data){
                if(data){
                    bool++;
                    $("input[name='email']").next().html('');
                    $("select[name='status'] option[value="+data.Status+"]").attr('selected',true).siblings().attr('selected',false);
                    $("select[name='role'] option[value="+data.Role+"]").attr('selected',true).siblings().attr('selected',false);
                }else{
                    $("input[name='email']").next().css('color','red').html('邮箱不存在');
                }
            });
        }else{
            $(this).next().css('color','red').html('邮箱格式非法');
        }
    });

    if(<?php echo ($result); ?>!=null){
        $("input[name='email']").val("<?php echo ($result["Email"]); ?>");
        $("select[name='status'] option[value="+<?php echo ($result["Status"]); ?>+"]").attr('selected',true).siblings().attr('selected',false);
                    $("select[name='role'] option[value="+<?php echo ($result["Role"]); ?>+"]").attr('selected',true).siblings().attr('selected',false);
    }

    $(".controls button").click(function(){
        if(bool==0){
            return false;
        }
    });

</script>

            </div>
        </div>
    </div>
</body>
</html>