$(document).ready(function(){

	// 设置小范围滚动条
	var diaryheight=document.documentElement.clientHeight-235;
	$('.kai-diaryInOut').height(diaryheight).css('overflow-y','scroll').css('overflow-x','hidden');
	// 设置小范围滚动条结束


	//点击对应日程  弹出右侧弹出框
	$('.show_right').click(taskIn);

	$(document).scroll(function(){
		$(document).height('100%');
	});

	$(document).height('100%');

	
	// 控制添加日程div的位置
	$('#kai-diaryAdd').css('left',$('#kai-diaryIn').offset()['left']+'px');

	// 点击显示/隐藏过去日程
	var flag=true;	
	$('.kai-diaryOldTitle a').click(function(){
		$('#kai-diaryOld').toggle();
		if(flag){
			$(this).html('隐藏');
			flag=false;
		}else{
			$(this).html('显示');
			flag=true;
		}
	});

	// 点击month显示出过去日程列表ss
	$('#kai-diaryOld .month').click(function(){		
		$(this).next().toggle(200);		
	});

	var kai_diaAdd=document.getElementById('kai-diaAdd');
	var kai_addProClose=document.getElementById('kai-addProClose');
	// 点击添加行程按钮，出现添加行程div
	kai_diaAdd.onclick=function(){
		document.getElementById('kai-addProGai').style.display='block';
		document.body.style.overflow="hidden";
	}
	// 点击X，添加行程div消失
	kai_addProClose.onclick=function(){
		document.getElementById('kai-addProGai').style.display='none';
		document.body.style.overflow='scroll';
	}
	// 点击遮罩层，添加行程div消失
	$('#kai-addProGai').click(function(){
		document.getElementById('kai-addProGai').style.display='none';
		document.body.style.overflow="";
	});

	$('#kai-addPro').click(function(){
		return false;
	});


// 添加日程选择开始日期
!function(){
	laydate({
		elem:'#addDiary-start',
		event: 'click',
		choose: function(dates){ 
			$('#addDiary-start').attr('value',dates);
        }
	});
}();

//添加日程选择结束日期
!function(){
	laydate({
		elem:'#addDiary-stop',
		event: 'click',
		choose: function(dates){ 
			$('#addDiary-stop').attr('value',dates);
        }
	});
}();

// 添加日程重复选择
function repeat_show(){
		 var left=$(this).offset()['left'];
		 var top=$(this).offset()['top'];
		 $('.diary-Repeat').css({
		 	'display':'block',
		 	'left':left,
		 	'top':top+30
			});
		 return false;
		}



	$('.diaryRepick-click').click(repeat_show);
	
	$('body').click(function(){
		$('.diary-Repeat').css('display','none');
	});

	$('#kai-addPro').click(function(){	
		$('.diary-Repeat').css('display','none');
	})

	$('#yue-taskRight').click(function(){
		$('.diary-Repeat').css('display','none');
	});

// 将时间戳转化为日期格式
function formatDate(now) {
	var year=now.getYear();
	var month=now.getMonth()+1;
	var date=now.getDate();
	var hour=now.getHours();
	var minute=now.getMinutes();
	var second=now.getSeconds();
	return month+"-"+date;
} 



	//点击添加日程的时候创建者为当前用户头像
	$('#kai-diaAdd').click(function(){
		
	})


	// ajax添加日程
	$('#addDiary-btn').click(function(e){
		var diary_title=$('#addDiary-title').val();
		var diary_address=$('#addDiary-address').val();
		var diary_start=$('#addDiary-start').attr('value');
		var diary_stop=$('#addDiary-stop').attr('value');
		var diary_repeat=$('#addDiary-repeat').val();
		var diary_memo=$('#addDiary-memo').val();
		var diary_projectId=$('#projectId').val();
		//var project_id=$_GET['project_id'];
		//alert(diary_stop);

		var diary_data='Project_id='+diary_projectId+'&Relevance_title='+diary_title+'&Address='+diary_address+'&Start_time='+diary_start+'&Stop_time='+diary_stop+'&Repeat='+diary_repeat+'&Relevance_memo='+diary_memo;
		$.post('/TP/Home/Diary/ajaxAdd',diary_data,function(data){
			var arr=JSON.parse(data);
			console.dir(arr);
			var Face=arr[1];
			if(arr[0]>0){
				// 如果不输入时间 默认得到日程开始时间为今天
				if(diary_start==null){
					diary_start= arr[2];
				}
				// 如果不输入时间 默认得到日程截止时间为明天
				if(diary_stop==null){
					diary_stop= arr[3];
				}
				var htmls="<li class='diaryIn-list show_right remove_diaryli' tab='3' data-id='"+arr[0]+"'><div class='list-left'><p>"+diary_start+"</p><p>~</p><p>"+diary_stop+"</p></div><div class='list-right'><span class='title'>"+diary_title+"</span><p><a class='fa fa-neuter'></a>"+diary_address+"</p><p>参与者</p><div><img class='mCS_img_loaded' src='/TP/Public/images/"+Face+"'><span class='fa fa-plus-circle'></span></div></div><i class='fa fa-chevron-right'></i></li>";
						var diary_htmls=$(htmls);
						diary_htmls.click(taskIn);
						$('#diaryIn-ul').prepend(diary_htmls);

						$('#kai-addProGai').css('display','none');
						$('body').css('overflow','scroll');
			}else{	
				//console.dir(data);
				alert('添加日程失败');
			}

		});
		event.stopPropagation();
	});


	

	//点击除滑入框之外的其他地方会收拢
	$('body').click(function(){
		diary_hidden();
	})


	//点击右侧滑入框，不会消失
	$('#yue-diaryRight').click(function(){
		return false;
	})


	//点击近期日程 执行滚动
	$('.diaryIn-list').click(function(){
		$(document).scroll();
	})
	
	//点击过去日程 执行滚动
	$('.diaryOld-listli').click(function(){
		$(document).scroll();
	})



});






