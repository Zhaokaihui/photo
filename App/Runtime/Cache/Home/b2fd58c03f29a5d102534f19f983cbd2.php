<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery响应式无限轮播图片代码 - 站长素材</title>

<link rel="stylesheet" type="text/css" href="/Public/css/main.css">
<link rel="stylesheet" href="/Public/js/photo/src/jquery.skidder.css">

</head>
<body>

<div class="slideshow" style="height: 0; margin-top:15px;overflow: hidden">
	<?php if(is_array($photo_list)): foreach($photo_list as $key=>$val): ?><div class="slide"><img src="/Public/images/photoImg/<?php echo ($val['photo_image']); ?>"></div><?php endforeach; endif; ?>
</div>

<script src="/Public/js/photo/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="/Public/js/photo/imagesloaded.js"></script>
<script src="/Public/js/photo/smartresize.js"></script>
<script src="/Public/js/photo/src/jquery.skidder.js"></script>
<script type="text/javascript">
	$('.slideshow').each( function() {
		  var $slideshow = $(this);
		  $slideshow.imagesLoaded( function() {
			$slideshow.skidder({
			  slideClass    : '.slide',
			  animationType : 'css',
			  scaleSlides   : true,
			  maxWidth : 1300,
			  maxHeight: 500,
			  paging        : true,
			  autoPaging    : true,
			  pagingWrapper : ".skidder-pager",
			  pagingElement : ".skidder-pager-dot",
			  swiping       : true,
			  leftaligned   : false,
			  cycle         : true,
			  jumpback      : false,
			  speed         : 400,
			  autoplay      : false,
			  autoplayResume: false,
			  interval      : 4000,
			  transition    : "slide",
			  afterSliding  : function() {},
			  afterInit     : function() {}
			});
		  });
	});
	$(window).smartresize(function(){
		  $('.slideshow').skidder('resize');
	});
</script>
</body>
</html>