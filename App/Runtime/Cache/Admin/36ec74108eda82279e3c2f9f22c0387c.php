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
				<!-- <div class="col-xs-4">
					<input type="text" class="form-control input-sm" placeholder="输入文字搜索">
					<button class="btn-white btn-xs ">查 询</button>
				</div> -->
			</div>

			<table class="photo-data-div" width="100%">
				<tr class="tableHeader">
					<td>选择</td>
					<td>编号</td>
					<td>照片</td>
					<td>排序</td>
					<td>是否禁用</td>
				</tr>
				<?php if(is_array($list)): foreach($list as $key=>$val): ?><tr class="tablebody">
					<td class="col-xs-1"><input type="checkbox" name="chose" value="<?php echo ($val['id']); ?>"/></td>
					<td class="col-xs-1" height="120px"><?php echo ($val['id']); ?></td>
					<td class="col-xs-2"><img class="photo_img" src='/Public/images/photoImg/<?php echo ($val['photo_image']); ?>'></td>
					<td class="col-xs-1"><?php echo ($val['sort']); ?></td>
					<td class="col-xs-1">
						<?php if(($val['is_delete'] == 0)): ?><img class="delete_on" src="/Public/images/delete_on.png">
						<?php else: ?>
							<img class="delete_off" src="/Public/images/delete_off.png"><?php endif; ?>
					</td>
				</tr><?php endforeach; endif; ?>
				<tr>
					<td>
						<div class="controls"><button type="button" id="add_btn" class="btn btn-success" style="width: 120px;">提交</button></div>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<div class="quotes"><?php echo ($page); ?></div>
<script type="text/javascript">
	$('.tableCell').click(
			function() {
				$(this).addClass('recommended').siblings().removeClass('recommended').children().children('.price3').removeClass('price3').addClass('price1');
				$(this).children().children('.price1').addClass('price3').removeClass('price1');
				var par = $(this).attr('par');
				$("td[par='" + par + "']").addClass('recommended').siblings().removeClass('recommended');
			});
	$('.edit-btn').click(function() {
		var par = $(this).parent().attr('par');
		var url = $(this).attr('href');
		url = url + '?id=' + par;
		$(this).attr('href', url);
	});
	
	$('#add_btn').click(function(){
		alert(1);
		var photo_id = [];
		$("input[name='chose']:checked").each(function(i){
			photo_id[i] =$(this).val();
        });
		console.log(photo_id);
	})
</script>