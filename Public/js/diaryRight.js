$(document).ready(function(){

	
	//先设置日程框的Left
	var clientWidth=document.documentElement.clientWidth;
	var mainWidth=clientWidth-$('#userinfo-bubai').width();

	// mainWidth-=16;
	//alert($('#userinfo-bubai').width());
	$('#yue-diaryRight').css('left',mainWidth+'px');
	
	//日程滑进
//	 $('#yue-diaryRight').animate({left:mainWidth-560+'px',width:'560px',opacity:'1'},400,function(){
//	 	$('.yue-comment').animate({bottom:'0px'},300);
//	 });
//	
//	$('#yue-diaryRight').animate({opacity:'1'},1000);
//	//日程滑出去
	// $('#yue-diaryRight').animate({left:mainWidth+'px',width:'0px',opacity:'0'},400,function(){
	// 	$('.yue-comment').animate({bottom:'-72px'},100);
	// });


	
	
});