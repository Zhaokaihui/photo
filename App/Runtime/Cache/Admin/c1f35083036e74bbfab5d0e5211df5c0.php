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
<link rel="stylesheet" href="/Public/CSS/bootstrap.min_new.css" media="screen">
<link rel="stylesheet" type="text/css" href="/Public/CSS/flat-ui.min.css" />
<link rel="stylesheet" type="text/css" href="/Public/CSS/jquery.nouislider.css">
<link rel="stylesheet" type="text/css" href="/Public/CSS/slide.css" />

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
                <a href="#"  target="menuFrame"> <i class="glyph-icon icon-reorder"></i>主题管理</a>
                <ul>
                    <li><a href="<?php echo U('Theme/theme_list');?>"><i class="glyph-icon icon-chevron-right"></i>主题列表</a></li>
                    <li><a href="<?php echo U('Theme/theme_add');?>"><i class="glyph-icon icon-chevron-right"></i>主题添加</a></li>
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
            <a id='admin-type'>关联照片</a>
        </div>
        <div class="mian_content">
            <div id="page_content">
                
<script type="text/javascript" src="/Public/JS/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="/Public/plugin/layer/layer.js"></script>
<script type="text/javascript" src="/Public/JS/common.js"></script>
<script type="text/javascript" src="/Public/JS/tendina.min.js"></script>


<link rel="stylesheet" href="/Public/CSS/admin.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/Public/CSS/admin_common.css" media="screen">
<link rel="stylesheet" href="/Public/CSS/bootstrap.min_new.css" media="screen">
<link rel="stylesheet" href="/Public/CSS/Page.css" type="text/css" media="screen" />
<div class="div_from_aoto">
	<div class='lyq-term'>
		<div role="tabpanel" class="tab-pane" id="user">
			<div class="check-div form-inline" style="height:45px;">
				<div class="col-xs-3">
					<a class="btn btn-yellow btn-xs relation-photo-add" par=<?php echo ($album_id); ?>>添加关联照片</a>
				</div>
				<!-- <div class="col-xs-4">
					<input type="text" class="form-control input-sm" placeholder="输入文字搜索">
					<button class="btn-white btn-xs ">查 询</button>
				</div> -->
			</div>

			<table class="photo-data-div" width="100%">
				<tr class="tableHeader">
					<td>编号</td>
					<td>照片</td>
					<td>操作</td>
				</tr>
				<?php if(is_array($list)): foreach($list as $key=>$val): ?><tr class="tablebody">
					<td class="col-xs-1" height="150px"><?php echo ($val['id']); ?></td>
					<td class="col-xs-2"><img class="relation_photo_img" src='/Public/images/photoImg/<?php echo ($val['photo_image']); ?>'></td>
					<td class="col-xs-1" par=<?php echo ($val['id']); ?>>
						<a class="btn btn-danger btn-xs del-btn" id="del-btn">删除</a>
					</td>
				</tr><?php endforeach; endif; ?>
			</table>
		</div>
	</div>
</div>
<div class="quotes"><?php echo ($page); ?></div>
<script type="text/javascript">
	$('.del-btn').click(function(){
		var par = $(this).parent().attr('par');
		layer.alert('',{
			icon:2,title:'删除确认',content:'您确定要删除这条记录吗？',closeBtn:1},function(index){
			$.ajax({
				type: "GET",
				url: '<?php echo U("Album/relation_photo_del");?>',
				data: {id:par},
				dataType: "json",
				success: function(data){
					refresh(1,data.msg)
				}
			});
		    layer.close(index);
		});
	})
	
	$('.relation-photo-add').click(function(){
		var par = $(this).attr('par');
		layer.open({
	        title:'添加关联照片',
	        type: 2,
	        area: ['700px', '530px'],
	        fix: false, //不固定
	        maxmin: true,
	        content: "<?php echo U('Album/relation_photo_add',array('album_id'=>$album_id));?>",
	        success:function(layero,index){
	        },
	        end:function(){
	            var handle_status = $("#handle_status").val();
	            if ( handle_status == '1' ) {
	                layer.msg('添加成功！',{
	                    icon: 1,
	                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
	                },function(){
	                    history.go(0);
	                });
	            } else if ( handle_status == '2' ) {
	                layer.msg('添加失败！',{
	                    icon: 2,
	                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
	                },function(){
	                    history.go(0);
	                });
	            }
	        }
	    });
	})
	
	
	
	
</script> 
            </div>
        </div>
    </div>
</body>
</html>