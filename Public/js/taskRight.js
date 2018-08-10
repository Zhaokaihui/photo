$(document).ready(function(){
	//开始需要设置main的宽跟高
	var clientWidth=document.documentElement.clientWidth;
	var mainWidth=clientWidth-$('#userinfo').width();
//	if($('#userinfo-bubai').width()!=0){
//		mainWidth-=16;
//	}
	$('#main').width(mainWidth);
	$(document).resize(function(){
		$('#main').width(mainWidth);
	});
	//设置任务滑动块初始位置
	$('#yue-taskRight').css('left',mainWidth+'px');
	
	
	

	
	//设置滑进的任务详情的高度
	var height=document.documentElement.clientHeight;
	$('#yue-taskRight').height(height-55);
	$(window).resize(function(){
		var height=document.documentElement.clientHeight;
		$('#yue-taskRight').height(height-55);
	});
	






// 选择参与者
function executor_show(){
		 var left=$(this).offset()['left'];
		 var top=$(this).offset()['top'];
		 $('.kai-Executor').css({
		 	'display':'block',
		 	'left':left,
		 	'top':top+30
			});
		 return false;
		}



	$('.executor-click').click(executor_show);
	
	$('body').click(function(){
		$('.kai-Executor').css('display','none');
	})

	$('#yue-taskRight').click(function(){
		$('.kai-Executor').css('display','none');
		
	});

	// 选择截止日期
	!function(){
		laydate({
			elem:'.kai-endTime',
			event: 'click',
			isclear: false,
			choose: function(dates){
				//修改数据库的任务截止时间
				var taskId=$('#yue-taskRight').attr('data-id');
				var projectId=$('#projectId').val();
				var data="Task_id="+taskId+"&Stop_time="+dates+"&Project_id="+projectId;
				
				$.get('/TP/Home/Task/upTaskStoptime',data,function(data){
					if(data=='true'){
						$('.Task-li[data-id='+taskId+']').find('.Task-content').find('div').eq(2).find('span').html(dates);
						$('#my_task').click();
					}else{
						alert(data);
					}
				});
		    }
		});
	}();






	//修改选择优先级
function up(){		
		 var left=$(this).offset()['left'];
		 var top=$(this).offset()['top'];
		 $('.up-click').css({
		 	'display':'block',
		 	'left':left,
		 	'top':top+50
			});
		 return false;
		}



	$('.up-taskPrior').click(up);
	
	$('body').click(function(){
		$('.up-click').css('display','none');
	});

	$('#yue-taskRight').click(function(){
		$('.up-click').css('display','none');
	})


	//修改选择优先级
function cr(){
		 var left=$(this).offset()['left'];
		 var top=$(this).offset()['top'];
		 $('.cr-click').css({
		 	display:'block',
		 	'left':left,
		 	'top':top+50
			});
		 return false;
		}



	$('.cr-TaskPrior').click(cr);
	
	$('body').click(function(){
		$('.cr-click').css('display','none');
	});

	$('#yue-taskRight').click(function(){
		$('.cr-click').css('display','none');
	})

	$('.yue-Task-Add').click(function(){
		$('.cr-click').css('display','none');
	})


// 重复选择

function repeat_show(){
		 var left=$(this).offset()['left'];
		 var top=$(this).offset()['top'];
		 $('.kai-Repeat').css({
		 	'display':'block',
		 	'left':left,
		 	'top':top+30
			});
		 return false;
		}



	$('.repeat-click').click(repeat_show);
	
	$('body').click(function(){
		$('.kai-Repeat').css('display','none');
	})

	$('#yue-taskRight').click(function(){
		$('.kai-Repeat').css('display','none');
	});








	//任务滑进
// 	 $('#yue-taskRight').animate({width:'560px',left:mainWidth-560+'px',opacity:'1'},400,function(){
// 	 	$('.yue-comment').animate({bottom:'0px'},300);
// 	 });
// //	
//	
	//$('#yue-taskRight').animate({opacity:'1'},5000);
	//任务滑出去
	// $('#yue-taskRight').animate({width:'0px',left:mainWidth+'px',opacity:'0'},400,function(){
	// 	$('.yue-comment').animate({bottom:'-72px'},100);
	// });

	//点击任务附加内容
	$('.yue-taskadd').click(function(){
		$('.yue-taskedit').hide();
		var _next=$('+ .yue-taskedit',this);
		_next.children(0).val($(this).attr('content'));
		_next.children(0).focus();
		_next.show();
		return false;
	});
	//点击取消
	$('.yue-qx').click(function(){
		$(this).parent().hide();
		return false;
	});
	
	
	
	
	
	
});