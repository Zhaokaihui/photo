$(document).ready(function(){
	$('#div_search').click(function(){return false;});
	var height=document.documentElement.clientHeight;
	var search_obj = true;
	$('#search').click(function(){
		if(search_obj){
			$('#main').css('height','0px');
			$('#div_search').css('background','rgba(100,100,100,0.8)').css('height',height-52+'px').show();
			$('#search_iconv').attr('class','fa fa-close');
			search_obj = false;
			$('#cyq_search_text').focus();
		}else{
			$('#main').css('height',height-54+'px');
			$('#div_search').hide();
			search_obj = true;
			$('#search_iconv').attr('class','fa fa-search');
		}
	})	
	//重新设置大小的时候
	$(window).resize(function(){
		$('#div_search').css('background','rgba(100,100,100,0.8)').css('height',height-52+'px');
	});
	
});
//获取焦点
function fc(obj){
	obj.parentElement.style.border='1px solid gray';	
}
//失去焦点
function bl(obj){
	obj.parentElement.style.border='0px';
}

	