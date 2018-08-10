$(document).ready(function(){
	var kai_mask=true;
	var kai_mask1=true;
	/***************点击弹出创建********************/
	$('.head .right:first li').eq(0).click(function(){
		if(kai_mask){
			$('#kai-create').show();
			$('#kai-user').hide();
			kai_mask1=true;
			kai_mask=false;
		}else{
			$('#kai-create').hide();
			
			kai_mask=true;
		}
		return false;
	})
	/***************点击弹出用户信息********************/
	$('.head .right:first li').eq(1).click(function(){
		if(kai_mask1){
			$('#kai-user').show();
			$('#kai-create').hide();
			kai_mask=true;
			kai_mask1=false;
		}else{
			$('#kai-user').hide();
			kai_mask1=true;
		}
		return false;
	})
	/***************鼠标放上去变色********************/
	$('#kai-create ul li').hover(function(){
		$(this).css('backgroundColor','#F5F5F5');
	},function(){
		$(this).css('backgroundColor','white');
	})

	$('#kai-user ul li').hover(function(){
		$(this).css('backgroundColor','#F5F5F5');
	},function(){
		$(this).css('backgroundColor','white');
	})
	/***************点击外面DIV消失********************/
	$('body').click(function(){
		$('.kai-sh').hide();
		kai_mask=true;
		kai_mask1=true;
	});
	
	
});
	
