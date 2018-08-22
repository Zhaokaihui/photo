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
            <a id='admin-type'>相册管理</a>
        </div>
        <div class="mian_content">
            <div id="page_content">
                
<div class="div_from_aoto" style="width: 500px;">
	<form method='post' action="<?php echo U('Index/album_edit',array('id'=>$result['id']));?>" enctype="multipart/form-data" >
		<div class="control-group">
			<label class="laber_from">相册名称</label>
			<div class="controls">
				<input class="input_from" name='album_name' placeholder="请输入相册名称" value='<?php echo ($result["album_name"]); ?>'>
				<p class=help-block></p>
			</div>
		</div>
		<div class="control-group">
			<label class="laber_from">相册简介</label>
			<div class="controls">
				<textarea class="text_from" style="width:250px;height:100px" name='album_introduce' placeholder="请输入相册简介"><?php echo ($result['album_introduce']); ?></textarea>
				<p class=help-block></p>
			</div>
		</div>
		<div class="control-group">
			<label class="laber_from">排序</label>
			<div class="controls">
				<input class="input_from" name='sort' value='<?php echo ($result["sort"]); ?>'>
				<p class=help-block></p>
			</div>
		</div>
		
		<div class="control-group">
			<label class="laber_from">相册封面</label>
			<div class="controls">
				<img class="album_image_img" src="/Public/images/albumImg/<?php echo ($result['album_image']); ?>">
				<button type="button" class="btn btn-success img_upload_btn" >选择图片 </button>
				<input type="file" name="image"  id="picture" class="img_upload_file" multiple="multiple" style="display: none" />
				<p class=help-block></p>
			</div>
		</div>
		
		
		<div class="control-group">
			<label class="laber_from">状态</label>
			<div class="controls">
				<select class="input_select" id="is_delete" name='is_delete'>
					<option value="0">正常</option>
					<option value="1">禁用</option>
				</select>
			</div>
		</div>
		<div class="control-group">
			<label class="laber_from"></label>
			<div class="controls">
				<input type='submit' id="btn" class="btn btn-success" style="width: 120px;">
			</div>
		</div>
		<div class="hidden-div">
			<input type="hidden" name="id" value="<?php echo ($result['id']); ?>">
		</div>
	</form>
</div>
<script type="text/javascript">
	var result = <?php echo ($result); ?>;
	$('#is_delete').val(<?php echo ($result['is_delete']); ?>)
	
	$(".img_upload_btn").click(function() {
        $(".img_upload_file").click();
    });
	
	$(".img_upload_file").change(function() {
		var path = $(this).val(),
		extStart = path.lastIndexOf('.'),
		ext = path.substring(extStart,path.length).toUpperCase();
		//判断图片格式
		if(ext !== '.PNG' && ext !== '.JPG' && ext !== '.JPEG' && ext !== '.GIF'){
			alert('请上传正确格式的图片');
			return false;
		}
		
		//判断图片大小
		
		var size = this.files[0].size / 1024;
		if(size > 6144){
		   alert('图片大小不能超过6M');
		   return false;
		}
		
		var file = this.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e) {
			$(".album_image_img").attr("src", this.result);
		};
	});
	
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