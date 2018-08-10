//$(document).ready(function(){
//	$('#my').click(function(){
//		$('#my').parent().css('background','#eee');
//		$('#inbox').parent().css('background','');
//		$('#box').slideUp(500);
//		$('#box #body2').css('display','none');
//		$('#box #body1').css('display','block');
//		$('#box').slideDown(500);
//		$('#box').css('display','block');
//	});
//	//top的hover效果
//	$('#footer').hover(function(){
//		$('#footer').css('background','#D2D2D2');
//	},function(){
//		$('#footer').css('background','#eee');
//	});
//	//点击'top'使日程信息框向下移动
//	$('#footer').click(function(){
//		$('#my').parent().css('background','white');
//		$('#box').slideUp(500);
//		$('#box').css('display','none');
//	});
//	//点击'收件箱',收缩'我的',跳出'收件箱'
//	$('#inbox').click(function(){
//		$('#my').parent().css('background','');
//		$('#inbox').parent().css('background','#eee');
//		$('#box').slideUp(500);
//		$('#box #body2').css('display','block');
//		$('#box #body1').css('display','none');
//		$('#box').slideDown(500);
//		$('#box').css('display','block');
//	});
//	//菜单的hover效果
//	$('#menu li').hover(function(){
//		$(this).children().addClass('bor');
//	},function(){
//		$(this).children().removeClass('bor');
//		$('#menu li a[title=true]').addClass('bor');
//	});
//	//菜单的点击效果
//	$('#menu li').click(function(){
//		$(this).children().attr('title','true').end().siblings().children().removeAttr('title');
//		$(this).siblings().children().removeClass('bor');
//	});
//	
//});

//点击项目全部


//点击我的选项的效果

//点击蒙版取消时间 
$(document).ready(function(){
	var clientHeight=document.documentElement.clientHeight;
	$('#mybox').css('height',clientHeight-52+'px').click(function(){return false;});
	var height=document.documentElement.clientHeight;
	$('#mybox > #totop').css('top',height-30+'px');
	$(window).resize(function(){
		var height=document.documentElement.clientHeight;
		$('#mybox > #totop').css('top',height-40+'px');
	});
	$('#mybox > #totop').click(function(){
			$('#mybox').slideUp(500);
			$('#mybox').attr('shownow','false');
			$('.gray').eq(0).css('background','white');
	});
	//点击我的
	$('.gray').click(function(e){
		e.stopPropagation();
		$('.gray').css('background','white');
		$(this).css('background','#EEE');
		if($(this).index()==1){			
			if($('#mybox').attr('shownow')=='false'){
				$('#mybox').slideDown().attr('shownow','true');
				$('body').css('overflow','hidden');
				$('body').height(0);
			}else if($('#mybox').attr('shownow')=='true'){
				$('#mybox').slideUp();
				$('#mybox').attr('shownow','false');
				$('body').css('overflow','');
				$('body').height('');
				$(this).css('background','white');
			}
		}
	});
//	$('#mynavigtor > li').click(function(){
//		$('#mynavigtor > li').removeClass('my_select');
//		$(this).addClass('my_select');
//	});
	
});

