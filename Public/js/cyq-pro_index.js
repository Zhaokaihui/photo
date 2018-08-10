$(document).ready(function(){
////新任务
//	$('.cyq-square').click(function(){
//		wid = document.documentElement.clientWidth;
//		hei = document.documentElement.clientHeight;
//		$('#cyq-newTast').css({'width':wid,'height':hei});
//		$('#cyq-newTast').show();
//	});
	$('.editClose').click(function(){
		$('#cyq-newTast').hide();
		return false; 
	});
//编辑
//	$('.cyq-edit').click(function(){
//		wid = document.documentElement.clientWidth;
//		hei = document.documentElement.clientHeight;
//		$('#cyq-editShare').css({'width':wid,'height':hei});
//		$('#cyq-editShare').show();
//		return false;
//	});
	$('.editClose').click(function(){
		$('#cyq-editShare').hide();
		return false; 
	});
////新日程
//	$('.cyq-calendar').click(function(){
//		wid = document.documentElement.clientWidth;
//		hei = document.documentElement.clientHeight;
//		$('#cyq-newSchedule').css({'width':wid,'height':hei});
//		$('#cyq-newSchedule').show();
//	});
	$('.editClose').click(function(){
		$('#cyq-newSchedule').hide();
		return false; 
	});
});