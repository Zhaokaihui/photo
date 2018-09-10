<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title></title>
	<link rel="stylesheet" type="text/css" href="/Public/css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="/Public/css/htmleaf-demo.css">
	<link rel="stylesheet" type="text/css" href="/Public/css/album_show_style.css" />
	<link rel="stylesheet" type="text/css" href="/Public/css/style.css" />
</head>
<body>
	<div class="htmleaf-container">
		<div class="htmleaf-content" style="padding:2em 0;">
			<div id="buttons"></div>
			<div id="gallery">
				<?php if(is_array($album_list)): foreach($album_list as $key=>$val): ?><img class="album_one pointer" par="<?php echo ($val['id']); ?>" src="/Public/images/albumImg/<?php echo ($val['album_image']); ?>" data-tags="<?php echo ($val['theme_names']); ?>" alt=""><?php endforeach; endif; ?>
		    </div>
		</div>
	</div>
<script type="text/javascript" src="/Public/js/jquery.min.js"></script>
<script type="text/javascript" src="/Public/js/filter-tags.js"></script>
<script type="text/javascript" src="/Public/plugin/layer/layer.js"></script>
<script>
//查看相册内照片
$('.album_one').click(function(){
	var par = $(this).attr('par');
	var url = "<?php echo U('Index/photo_show',array('album_id'=>'par'));?>";
	url =  url.replace("par",par); //将代替变量的字符串用真实变量替换掉，OK搞定！
	layer.open({
        title:'查看',
        type: 2,
        area: ['700px', '550px'],
        fix: false,
        maxmin: true,
        shadeClose: true,
        content: url
    });
})
</script>
</body>
</html>