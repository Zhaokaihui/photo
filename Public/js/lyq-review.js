$(function(){
	
	$(window).resize(function(){
		var height=document.documentElement.clientHeight;
		height=parseInt(height)-175;
		$('.reviewBody-left').css('height',height);
		$('.reviewBody-right').css('height',height);
	});

	

});