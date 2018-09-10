<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
<link rel="stylesheet" href="/Public/plugin/layui/css/layui.css"
	media="all">
<link rel="stylesheet" type="text/css" href="/Public/css/main.css">
</head>
<body oncontextmenu=self.event.returnValue=false
	onselectstart="return false">
	<div class="layui-carousel" id="test1" width="100%">
		<div carousel-item>
			<?php if(is_array($photo_list)): foreach($photo_list as $key=>$val): ?><div class="photo_show_div">
				<img class="photo_show_img"
					src="/Public/images/photoImg/<?php echo ($val['photo_image']); ?>">
			</div><?php endforeach; endif; ?>
		</div>
	</div>
	<script type="text/javascript" src="/Public/plugin/layui/layui.js"></script>
	<script>
		layui.use('carousel', function() {
			var carousel = layui.carousel;
			//建造实例
			carousel.render({
				elem : '#test1',
				width : '100%',
				height : '480px',//设置容器宽度
				arrow : 'always' //始终显示箭头
			//,anim: 'updown' //切换动画方式
			});
		});
	</script>
</body>
</html>