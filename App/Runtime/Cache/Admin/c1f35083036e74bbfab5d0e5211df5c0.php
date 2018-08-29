<?php if (!defined('THINK_PATH')) exit();?><meta charset="UTF-8">

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
					<a class="btn btn-yellow btn-xs"  href="<?php echo U('Photo/photo_add');?>">添加照片</a>
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
					<td class="col-xs-2" height="120px"><?php echo ($val['id']); ?></td>
					<td class="col-xs-2"><img class="photo_img" src='/Public/images/photoImg/<?php echo ($val['photo_image']); ?>'></td>
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
</script>