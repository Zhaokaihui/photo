<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title></title>
	<link rel="stylesheet" type="text/css" href="/Public/cssa/normalize.css" />
	<link rel="stylesheet" type="text/css" href="/Public/cssa/htmleaf-demo.css">
	<link rel="stylesheet" href="/Public/cssa/style.css" />
</head>
<body>
	<div class="htmleaf-container">
		<div class="htmleaf-content" style="padding:2em 0;">
			<div id="buttons"></div>
			<div id="gallery">
				<?php if(is_array($album_list)): foreach($album_list as $key=>$val): ?><img src="/Public/images/albumImg/<?php echo ($val['album_image']); ?>" data-tags="<?php echo ($val['theme_names']); ?>" alt="Alex Man"><?php endforeach; endif; ?>
		    </div>
		</div>
	</div>
	
	<script src="/Public/jsa/jquery-1.11.0.min.js" type="text/javascript"></script>
	<script src="/Public/jsa/filter-tags.js"></script>
</body>
</html>