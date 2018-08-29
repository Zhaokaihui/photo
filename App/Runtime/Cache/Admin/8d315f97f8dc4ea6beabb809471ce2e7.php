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
<link rel="stylesheet" href="/Public/CSS/admin_common.css" media="screen">
<link rel="stylesheet" href="/Public/CSS/bootstrap.min_new.css" media="screen">
<link rel="stylesheet" type="text/css" href="css/flat-ui.min.css" />
<link rel="stylesheet" type="text/css" href="css/jquery.nouislider.css">
<link rel="stylesheet" type="text/css" href="css/slide.css" />

<script type="text/javascript" src="/Public/JS/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="/Public/JS/tendina.min.js"></script>
<script type="text/javascript" src="/Public/JS/common.js"></script>
<script type="text/javascript" src="/Public/JS/bootstrap.min.js"></script>

<script type="text/javascript" src="/Public/plugin/layer/layer.js"></script>

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
                    <li><a href="<?php echo U('Album/album_list');?>"><i class="glyph-icon icon-chevron-right"></i>相册列表</a></li>
                    <li><a href="<?php echo U('Album/album_add');?>"><i class="glyph-icon icon-chevron-right"></i>相册添加</a></li>
                </ul>
            </li>
            <li class="childUlLi">
                <a href="#"  target="menuFrame"> <i class="glyph-icon icon-reorder"></i>照片管理</a>
                <ul>
                    <li><a href="<?php echo U('Photo/photo_list');?>"><i class="glyph-icon icon-chevron-right"></i>照片列表</a></li>
                    <li><a href="<?php echo U('Photo/photo_add');?>"><i class="glyph-icon icon-chevron-right"></i>照片添加</a></li>
                </ul>
            </li>
            <li class="childUlLi">
                <a href="#"  target="menuFrame"> <i class="glyph-icon icon-reorder"></i>用户管理</a>
                <ul>
                    <li><a href="<?php echo U('Index/user_add');?>"><i class="glyph-icon icon-chevron-right"></i>用户添加</a></li>
                    <li><a href="<?php echo U('Index/user_list');?>"><i class="glyph-icon icon-chevron-right"></i>用户列表</a></li>
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
            <a id='admin-type'>相册列表</a>
        </div>
        <div class="mian_content">
            <div id="page_content">
                 <script type="text/javascript"
	src="/Public/JS/css-browser-select.js"></script>
<div class="div_from_aoto">
	<div class='lyq-term'>
		<div role="tabpanel" class="tab-pane" id="user">
			<div class="check-div form-inline" style="height:45px;">
				<div class="col-xs-3">
					<a class="btn btn-yellow btn-xs"  href="<?php echo U('Album/album_add');?>">添加相册</a>
				</div>
				<!-- <div class="col-xs-4">
					<input type="text" class="form-control input-sm" placeholder="输入文字搜索">
					<button class="btn-white btn-xs ">查 询</button>
				</div> -->
			</div>

			<table class="album-data-div" width="100%">
				<tr class="tableHeader">
					<td width="30px">编号</td>
					<td>相册名称</td>
					<td>相册封面</td>
					<td>相册简介</td>
					<td>关联照片</td>
					<td>排序</td>
					<td>前台显示</td>
					<td>操作</td>
				</tr>
				<?php if(is_array($list)): foreach($list as $key=>$val): ?><tr class="tablebody">
					<td class="col-xs-1" height="120px"><?php echo ($val['id']); ?></td>
					<td class="col-xs-2"><?php echo ($val['album_name']); ?></td>
					<td class="col-xs-2"><img class="album_img" src='/Public/images/albumImg/<?php echo ($val['album_image']); ?>'></td>
					<td class="col-xs-2"><?php echo ($val['album_introduce']); ?></td>
					<td class="col-xs-1" par=<?php echo ($val['id']); ?>><a class="relation-photo-btn" href="<?php echo U('Album/relation_photo_list');?>">查看</a></td>
					<td class="col-xs-1"><?php echo ($val['sort']); ?></td>
					
					<td class="col-xs-1">
						<?php if(($val['is_delete'] == 0)): ?><img class="delete_on" src="/Public/images/delete_on.png">
						<?php else: ?>
							<img class="delete_off" src="/Public/images/delete_off.png"><?php endif; ?>
					</td>
					<td class="col-xs-1" par=<?php echo ($val['id']); ?>>
						<a class="btn btn-success btn-xs edit-btn" href="<?php echo U('Album/album_edit');?>">修改</a>
						<a class="btn btn-danger btn-xs del-btn">删除</a>
					</td>
				</tr><?php endforeach; endif; ?>
			</table>
		</div>
	</div>
</div>
<div class="quotes"><?php echo ($page); ?></div>
<script type="text/javascript">
	$('.tableCell').click(
			function() {
				$(this).addClass('recommended').siblings().removeClass(
						'recommended').children().children('.price3')
						.removeClass('price3').addClass('price1');
				$(this).children().children('.price1').addClass('price3')
						.removeClass('price1');
				var par = $(this).attr('par');
				$("td[par='" + par + "']").addClass('recommended').siblings()
						.removeClass('recommended');
			});
	$('.edit-btn').click(function() {
		var par = $(this).parent().attr('par');
		var url = $(this).attr('href');
		url = url + '?id=' + par;
		$(this).attr('href', url);
	});
	
	$('.del-btn').click(function(){
		var par = $(this).parent().attr('par');
		layer.alert('',{
			icon:2,title:'删除确认',content:'您确定要删除这条记录吗？',closeBtn:1},function(index){
			$.ajax({
				type: "GET",
				url: '<?php echo U("Album/album_del");?>',
				data: {id:par},
				dataType: "json",
				success: function(data){
					refresh(1,data.msg)
				}
			});
		    layer.close(index);
		});
	})
	
	//关联照片选择
	$('.relation-photo-btn').click(function(){
		var par = $(this).parent().attr('par');
		var url = $(this).attr('href');
		url = url + '?id=' + par;
		$(this).attr('href', url);
	})
</script> 
            </div>
        </div>
    </div>
</body>
</html>