$(document).ready(function(){
	//任务右侧详情的更多点击
	$('#taskMore').click(function(e){
		e.stopPropagation();
		var _top=$(this).offset()['top'];
		var _left=$(this).offset()['left'];
		$('#taskMoreOper').css('left',_left-30).css('top',_top+30).show();
	});
	//点击右侧让更多消失
	$('#yue-taskRight').click(function(){
		$('#taskMoreOper').hide();
	});
	$('#taskDelete').click(function(){
		var taskId=$('#yue-taskRight').attr('data-id');
		var projectId=$('#projectId').val();
		var data="Task_id="+taskId+"&Project_id="+projectId;
		$.get('/TP/Home/Task/deleteTask',data,function(data){
			if(data=='true'){

				$(".Task-li[data-id='"+taskId+"']").remove();
				$('#main').click();
				$('body').click();
			}else{
				alert(data);
			}
		});
	});
	
	
	
	//我的任务的点击
	$('#my_task').off('click');
	$('#my_task').click(function(e){
		$('.mycon > div').hide();
		$('#my_content').show();
		e.stopPropagation();
		$('#mynavigtor li').removeClass('my_select');
		$(this).addClass('my_select');
		//var projectId=$('#projectId').val();
		$.get('/TP/Home/Task/getMyTask',function(data){
			var mytask=JSON.parse(data);
			console.dir(mytask);
			$('#myTask li').remove();
			for(var i in mytask){
				var li="<li data-id='"+mytask[i]['Task_id']+"' tab='2' class='myright'><div class='myTaskPriority'></div> <div class='myTaskContent'><span class='myTaskName'>"+mytask[i]['Task_name']+"</span> <span class='myTaskProject'>"+"#"+mytask[i]['Project_name']+"</span></div> <div class='crl'></div> </li>"
				
				var appendli=$(li);
				appendli.click(taskIn);
				var color="";
				if(mytask[i]['Priority']=="普通"){
					color="gray";
				}else if(mytask[i]['Priority']=="紧急"){
					color="orange";
				}else if(mytask[i]['Priority']=="非常紧急"){
					color="red";
				}
				appendli.find('.myTaskPriority').css('background',color);
				$('#myTask').append(appendli);
			}
			
		})
	});

	
	
	
	
	//评论框获得焦点出现发布操作
	//未完成
	$('.yue-commentcontent').focus(function(){
		$(this).parent().parent().animate({height:'108px'},300);
		$(this).parent().next().show();
		$(this).parents('.huaRight').click(function(){
			$('.yue-commentcontent',this).parent().parent().animate({height:'72px'},100);
			$('.yue-commentcontent',this).parent().next().hide(100);
		});
		$(this).prev().attr('class','fa fa-terminal');
	});
	//取消评论模块的点击冒泡
	$('.yue-comment').click(function(){return false;});

	$('.yue-commentcontent').blur(function(){
		$(this).prev().attr('class','fa fa-comment');
		
	});
	
	//点击主体让右侧的滑进
	$('#main').click(function(){
		 $('#yue-taskRight').animate({width:'0px',left:mainWidth+'px',opacity:'0'},100,function(){
				//$('.yue-comment').css({bottom:'-72px'});
			});

	});
	
	//点击我的面板让右侧回去
	$('#mybox').click(function(){
		 $('#yue-taskRight').animate({width:'0px',left:mainWidth+'px',opacity:'0'},100,function(){
				$('.yue-comment').animate({bottom:'-72px'},0);
			});
		 clearInterval(rightTaskTimmer);
	});


	// 赵凯慧-点击主页的其他地方  日程右侧弹出框都会收起来
	$('body').click(function(){
		$('#yue-diaryRight').animate({left:mainWidth+'px',width:'0px',opacity:'0'},100,function(){
			$('.yue-comment').animate({bottom:'-72px'},0);
		});
		//点击页面取消定时器
		clearInterval(rightTaskTimmer);
	});

		



	// 赵凯慧-点击主体让日程右侧弹出框收起来
	$('#main').click(function(){
		$('#yue-diaryRight').animate({left:mainWidth+'px',width:'0px',opacity:'0'},100,function(){
			$('.yue-comment').animate({bottom:'-72px'},0);
		});
	});


	//赵凯慧-点击日程右侧弹出框 取消冒泡
	$('.my_diary').click(function(){
		return false;
	});


	//赵凯慧-点击’我的‘遮罩层  收起弹出框
	$('.mycon').click(function(){
		$('#yue-diaryRight').animate({left:mainWidth+'px',width:'0px',opacity:'0'},100,function(){
			$('.yue-comment').animate({bottom:'-72px'},0);
		});
	});

	//赵凯慧-点击收起’我的‘遮罩层  收起弹出框
	$('#totop').click(function(){
		$('#yue-diaryRight').animate({left:mainWidth+'px',width:'0px',opacity:'0'},100,function(){
			$('.yue-comment').animate({bottom:'-72px'},0);
		});
		$('body').css('overflow','');
	});

	//赵凯慧-取消弹出框冒泡
	$('#yue-diaryRight').click(function(){
		return false;
	});




// 赵凯慧我的日程************************************************************************************************************

	$('#myDiary').click(function(e){
		$('.mycon > div').hide();
		$('.kai-myDiary').show();

		// 设置小范围滚动条
		var ssheight=document.documentElement.clientHeight-175;
		$('.kai-myDiary').height(ssheight).css('overflow-y','scroll').css('overflow-x','hidden');
		// 设置小范围滚动条结束



		var tab='3';
		$('#mynavigtor li').removeClass('my_select');
		$(this).addClass('my_select');
		// 得到我的近期日程
		var myNowDiary_data='tab='+tab;

		$.post('/TP/Home/Diary/ajaxMyNowDiary',myNowDiary_data,function(data){
			console.dir(data);
			var now_diary='';
			for(var i in data){
				if(data[i]==null){
					continue;
				}
				now_diary+='<li class="show_right remove_mydiary" tab="3" data-id="'+data[i]['Relevance_id']+'"><div class="diary-date"><span>'+data[i]['Start_time']+' - </span><span>'+data[i]['Stop_time']+'</span></div><div class="diary-info"><span>'+data[i]['Relevance_title']+'</span><a>'+data[i]['Project_name']+'</a></div></li>';
				
			}
			var now_diary=$(now_diary);
			$('#mybox').find('.kai-myDiary').find('.my-newDiary').find('ul').find('li').remove();
			$('#mybox').find('.kai-myDiary').find('.my-newDiary').find('ul').prepend(now_diary);
			now_diary.click(taskIn);

			
		});


		// 得到我的过去日程
		var myOldDiary_data='tab='+tab;

		$.post('/TP/Home/Diary/ajaxMyOldDiary',myOldDiary_data,function(data){
			console.dir(data);
		
			var old_diary='';
			for(var i in data){
				if(data[i]==null){
					continue;
				}
				old_diary+='<li class="show_right remove_mydiary" tab="3" data-id="'+data[i]['Relevance_id']+'"><div class="diary-date"><span>'+data[i]['Start_time']+' - </span><span>'+data[i]['Stop_time']+'</span></div><div class="diary-info"><span>'+data[i]['Relevance_title']+'</span><a>'+data[i]['Project_name']+'</a></div></li>';
				
			}
			var old_diary=$(old_diary);
			$('#mybox').find('.kai-myDiary').find('.my-oldDiary').find('ul').find('li').remove();
			$('#mybox').find('.kai-myDiary').find('.my-oldDiary').find('ul').prepend(old_diary);
			old_diary.click(taskIn);
			
		});
		e.stopPropagation();
		
	});

	


// 赵凯慧我的日程结束********************************************************************************************************
	
	
	//添加项目的JS
	$('.projectSmall > img').click(function(e){
		e.stopPropagation();
		var bigimg="/TP/Public/images/"+$(this).attr('alt');
		$('.projectBig > img').attr('src',bigimg);
		$('#project_picture').val($(this).attr('alt'));
		
	});
	
	//创建项目的按钮点击提交表单
	$('.create-btn').click(function(){
		var pn=$('#addProject_namae').val();
		if(pn.trim()==""){
			$('#addProject_namae').focus();
		}else{
			document.forms['addProject'].submit();
		}
	});
	//创建项目的取消按钮
	$('.remove-btn').click(function(){
		$('.kai-createProject').hide();
	});
	//添加项目的蒙版 创建项目的蒙版
	$('#yue-createproject').click(function(e){
		e.stopPropagation();
		$('.kai-createProject').show();
	});
	
	
	//归档
	$('.guidang').click(function(){
		var projectId=$(this).attr('data-id');
		$.get('/TP/Home/Index/guidang?Project_id='+projectId,function(data){
			if(data=='true'){
				$(".guidang[data-id='"+projectId+"']").parents('li').remove();
			}else{
				alert('失败');
			}
		});
	});
	
	
});


//陈文越获取完成进度
function  getSchedule(){
	
	$('.Stage').each(function(){
		var taskCount=$(this).find('.Task-li').size();
		var finalTask=0;
		$(this).find('.Task-state').each(function(){
			if($(this).html()!=""){
				finalTask+=1;
			}
		});
		var sc=finalTask/taskCount;
		if(taskCount==0){
			sc=0;
		}
		sc=sc*100;
		sc='完成度'+sc.toString().substr(0,4)+'%';
		$(this).find('#yue-stageSchedule').html(sc);
		$(this).find('#yue-stageSchedule').css('display','block');
		
		
	});
		
	
	
	
}
//陈文越删除线
function finalLine(){
	
	$('.Task-li').find('.Task-state').each(function(){
		if($(this).html()!=""){
			//加删除线
			$(this).next().find('.Task-text').css('text-decoration','line-through').css('color','gray');
			
			
		}else{
			//变回原来的 黑色  没有线
			$(this).next().find('.Task-text').css('text-decoration','none').css('color','black');
			
		}	
	});
}

//陈雅倩分享右侧滑入框	
function shareIn(event){
	var par = $(this).attr('data-id');
	var tab = $(this).attr('tab');
	if(tab == 4){
		var box_wid = document.documentElement.clientWidth;
		var box_heig = document.documentElement.clientHeight;
		$('#cyq-shareBox').height(box_heig-52);
		$('#cyq-shareBox').css('left',box_wid-650+'px').show();
		$('.cyq-shareBoxmore').click(function(event){
			var moretop = $(this).offset()['top'];
			var moreleft = $(this).offset()['left']-1030;
			$('#cyq-shareList').css({'top':moretop+'px','left':moreleft+'px','z-index':'110'});
			$('#cyq-shareList').show();	
			event.stopPropagation();
		});
		$('.cyq-listTitle > .listClose').click(function(event){
			$('#cyq-shareList').hide();
			event.stopPropagation();
		});
		$('#cyq-shareBox').click(function(event){
			$('#cyq-shareList').hide();
			$('#cyq-shareMember').hide();
			event.stopPropagation();
		});
		$('.cyq-circle').click(function(event){
			var moretop = $(this).offset()['top']-260;
			var moreleft = $(this).offset()['left']-310;
			$('#cyq-shareMember').css({'top':moretop+'px','left':moreleft+'px','z-index':'105'});
			$('#cyq-shareMember').show();
			event.stopPropagation();
		});
		$('#cyq-shareMember').click(function(event){
			event.stopPropagation();
		});

		$.get("{:U('Share/shareLeftbox')}",'par='+par+'&tab='+tab,function(data){
			var data = JSON.parse(data);
			$('.cyq-shareBoxtitle > .share-title').html(data[0]['Share_title']);
			$('.cyq-shareBoxarticle').html(data[0]['Share_text']+'<input type="hidden" value="'+data[0]['User_id']+'">');
			// 删除分享
			$('.cyq-actList > .delete').click(function(){
				$('#cyq-shareList').hide();
				var user_id = $('.cyq-shareBoxarticle').children('input').val();


				$.get('/TP/Home/Share/shareDelete','share_id='+par+'&project_id='+Project_id+'&user_id='+user_id,function(data){
					alert(data);	
				});
				return true;
			});

		});
		$.get('/TP/Home/Share/review','project_id='+Project_id+'&share_id='+par,function(data){
			var data = JSON.parse(data);
			var str = '';
			for(var i=0;i<data.length;i++){
				str += '<li><a>'+data[i]['User_name']+' '+data[i]['Content']+'</a><a class="time">'+getLocalTime(data[i]['Review_time'])+'</a></li>';
			}
			$('.cyq-shareBoxcomment').html(str);
		});
		$.get('/TP/Home/Share/shareActor','share_id='+par,function(data){
			var data = JSON.parse(data);
			var str ='';
			for(var i=0;i<data.length;i++){
				str += '<input class="actors_id" id="actors_'+data[i]['User_id']+'" type="hidden" value="'+data[i]['User_id']+'"/>';
				str += '<img class="cyq-userimg tip" title="'+data[i]['User_name']+'" src="/TP/Public/images/'+data[i]['Face']+'">';
			}
			$('.cyq-shareBoxactor > .cyq-head').html(str);	

			//点击头像删除参与者
			$('.cyq-userimg').click(getUserdelete);
			
		});
		
		//添加参与者
		$.get('/TP/Home/Share/shareAddactor','project_id='+Project_id+'&share_id='+par,function(data){
			var data = JSON.parse(data);
			var str ='';
			for(var i=0;i<data.length;i++){
				str += '<div class="member1">';
				str += '<a class="cyq-head"><img src="/TP/Public/images/'+data[i]['Face']+'"></a>';
				str += '<a>'+data[i]['User_name']+'</a>';
				str += '<input class="actorUser_id" id="actorUser_'+data[i]['User_id']+'" type="hidden" value="'+data[i]['User_id']+'"/>';
				str += '<input class="cyq-check" type="checkbox" />';
				str += '</div>';
			}
			$('#cyq-shareMember > .members').html(str);

			//点击添加参与者
			$('.cyq-check').click(getChecked);
			
		});
		function getUserdelete(){
			var actorid = $(this).prev('.actors_id').val();
			$('#actors_'+actorid).next('img').remove();
			$('#actors_'+actorid).remove();
			$.get('/TP/Home/Share/deleteActor','project_id='+Project_id+'&userid='+actorid+'&shareid='+par,function(data){
				
			});
			$.get('/TP/Home/Share/shareAddactor','project_id='+Project_id+'&share_id='+par,function(data){
				var data = JSON.parse(data);
				var str ='';
				for(var i=0;i<data.length;i++){
					str += '<div class="member1">';
					str += '<a class="cyq-head"><img src="/TP/Public/images/'+data[i]['Face']+'"></a>';
					str += '<a>'+data[i]['User_name']+'</a>';
					str += '<input class="actorUser_id" id="actorUser_'+data[i]['User_id']+'" type="hidden" value="'+data[i]['User_id']+'"/>';
					str += '<input class="cyq-check" type="checkbox" />';
					str += '</div>';
				}
				
				$('#cyq-shareMember > .members').html(str);
				$('.cyq-check').click(getChecked);
			});
		}
		function getChecked(event){
			$('#cyq-shareMember').hide();
			var actorid = $(this).parent().children('.actorUser_id').val();
			var checked = $(this).parent().children('input:checked').length;
			$(this).parent().remove();
			
			$.get('/TP/Home/Share/addActor','project_id='+Project_id+'&userid='+actorid+'&length='+checked+'&shareid='+par,function(data){
				var data = JSON.parse(data);
				if(checked == 1){
					str = '<input class="actors_id" id="actors_'+data[0]['User_id']+'" type="hidden" value="'+data[0]['User_id']+'"/>';
					str += '<img class="cyq-userimg tip" title="'+data[0]['User_name']+'" src="/TP/Public/images/'+data[0]['Face']+'">';
					$('.cyq-shareBoxactor > .cyq-head').append(str);
				}else{
					$('#actors_'+data[0]['User_id']).next('img').remove();
					$('#actors_'+data[0]['User_id']).remove();
				};
				$('.cyq-userimg').click(getUserdelete);
			});
			event.stopPropagation();
		}
	
	}else{
		$('#cyq-shareBox').hide();
		$('#cyq-shareList').hide();
		$('#cyq-shareMember').hide();
	};
	event.stopPropagation();
}
//分享右侧滑入框结束






//陈文越读取右侧任务详情的方法
function getTask(taskId,data){
	var taskDetail=JSON.parse(data);

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!这里改页面上的右侧任务刷新时间$('#taskrefreshtime')
	$('#taskrefreshtime').val(taskDetail['Edit_time']);
	console.dir(taskDetail);

	$('#yue-groupn').html(taskDetail['Group_name']);//组名
	$('#yue-taskn').html(taskDetail['Stage_name']);	//阶段名
	if(taskDetail['State']=='未完成'){
		$('#yue-titleinfo').css('color','black').css('text-decoration','none');
	}else{
		$('#yue-titleinfo').css('color','gray').css('text-decoration','line-through');
	}
	$('#yue-titleinfo').html(taskDetail['Task_name']);//任务名
	$('#yue-titleinfo').attr('taskname',taskDetail['Task_name']);
	//点击编辑输入任务标题
	$('#yue-titleinfo').off('click');
	$('#yue-titleinfo').click(function(){
		_text=$('#yue-titleinfo').text();
		$(this).html('');
		var _input=$('<input type="text" id="title" name="title"  />');
		_input.css('border','0px').css('height','33px').css('width','100%').css('font-size','20px').css('background','#EEE').css('font-family','微软雅黑');
		$(this).append(_input);
		_input.val(_text);
		//_input.focus();
		_input.click(function(){return false;});
		$(this).off('click');
		return false;
	});
//	$(document).click(function(){
//		$('#yue-titleinfo').html($('#title').val());
//		$('#yue-titleinfo').click(function(){
//			_text=$('#yue-titleinfo').text();
//			$(this).html('');
//			var _input=$('<input type="text" id="title" name="title" />');
//			_input.css('border','0px').css('height','33px').css('width','100%').css('font-size','20px').css('background','#EEE').css('font-family','微软雅黑');
//			$(this).append(_input);
//			_input.val(_text);
//			//_input.focus();
//			_input.click(function(){return false;});
//			$(this).off('click');
//			return false;
//		});
//	});
	
	
	
	$('#user_img > img').attr('src','/TP/Public/images/'+taskDetail['Face']);//创建者头像
	$('#user_img + span').html(taskDetail['User_name']);//修改创建者名字
	$('#kai-endTime').val(taskDetail['Stop_time']);//截止时间
	$('#yue-pri').html(taskDetail['Priority']);//优先级
	//设置优先级颜色
	var color="";
	if(taskDetail['Priority']=="普通")
	{
		color="#A6A9AA";
	}
	else if(taskDetail['Priority']=="紧急"){
		color="orange";
	}else{
		color="red";
	}
	$('#yue-pri').prev().css('color',color);//设置颜色
	
	$('#yue-rep').html(taskDetail['Repeat']);//重复
	$('#yue-taskclause').attr('content',taskDetail['Content']);//任务备注
	var img="";
	for(var i=0;i<taskDetail['Allot_users'].length;i++){
		img+="<img class='yue-partakeimg tip' data-id='"+taskDetail['Allot_users'][i]['User_id']+"' title='"+taskDetail['Allot_users'][i]['User_name']+"' src='/TP/Public/images/"+taskDetail['Allot_users'][i]['Face']+"' />";
		
	}//加载参与者头像
	$('#yue-taskpartake').find('p').eq(1).find('img').remove();
	$('#yue-taskpartake').find('p').eq(1).prepend($(img));
	//需要为头像绑定点击取消事件 任务ID是 taskId!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	$('.yue-partakeimg').click(function(){
		var user_img=$(this);
		var userId=$(this).attr('data-id');
		var data="Task_id="+taskId+"&User_id="+userId;
		$.get('/TP/Home/Task/removeTaskAllot',data,function(data){
			if(data=='true'){
				user_img.remove();
			}else{
				alert(data);
			}
		});
	});
	
	var li="";
	for(var i=0;i<taskDetail['Discuss'].length;i++){
		li += "<li><div><img src='/TP/Public/images/"+taskDetail['Discuss'][i]['Face']+"' /> <span class='yue-activeleft'>"+taskDetail['Discuss'][i]['User_name']+" : "+taskDetail['Discuss'][i]['Content']+"</span> <span class='yue-activeright'>"+getLocalTime(taskDetail['Discuss'][i]['Create_time'])+"</span>  </div></li>";
	}//加载评论
	$('#yue-taskactive ul').find('li').remove();
	$('#yue-taskactive ul').prepend($(li));

	//加载子任务
	var sonli="";
	for(var i=0;i<taskDetail['sonTasks'].length;i++){
		sonli+="<li data-id='"+taskDetail['sonTasks'][i]['Son_id']+"'><span>"+taskDetail['sonTasks'][i]['User_name']+" "+taskDetail['sonTasks'][i]['Content']+"</span><span class='removeSon'><i class='fa fa-close sonremove'></i></span></li>";	
	}
	$('#sonTsak').html('');
	$('#sonTsak').prepend($(sonli));
	//这里需要给绑定一个点击删除子任务的事件！！！！！！！！！！！！！！！！！！！！！！！！！！！
	$('.removeSon').off('click');
	$('.removeSon').click(function(){
		var removeli=$(this).parent();
		var sonId=$(this).parent().attr('data-id');
		var projectId=$('#projectId').attr('data-id');
		var data="Son_id="+sonId+"&Task_id="+$('#yue-taskRight').attr('data-id')+"&Project_id="+projectId;
		$.get('/TP/Home/Task/removeSonTask',data,function(data){
			if(data=='true'){
				removeli.remove();
			}else{
				alert(data);
			}
		});
	});
	
	
	
	//截止时间发生改变的时候修改数据库
	//该功能在taskRight.js脚本里 大概 55行
	
	//同步刷新 右侧同步更新
	
	
	clearInterval(rightTaskTimmer);
	rightTaskTimmer=setInterval(rightrefresh,1500);
	
}

//陈文越 6.7同步刷新的方法
function rightrefresh(){
	//先取消计时器为了给ajax读取数据提供时间
	clearInterval(rightTaskTimmer);
	var refreshtime=$('#taskrefreshtime').val();
	var taskId=$('#yue-taskRight').attr('data-id');
	var data="Task_id="+taskId+"&refreshtime="+refreshtime;
	//发送当前的时间
	$.get('/TP/Home/Task/rightRefresh',data,function(data){
		if(data=='false'){
			//右侧没更新
			rightTaskTimmer=setInterval(rightrefresh,1500);
		}else{
			//右侧有更新
			var retask=JSON.parse(data);
			$('#taskrefreshtime').val(retask['Edit_time']);//修改掉页面上的任务刷新时间
			
			getTask(taskId,data);
		}
	});
	
}

//陈文越6.8 同步刷新组的方法 组同步更新
function refreshGroup(){
	var groupId=$('#groupId').val();
	var projectId=$('#projectId').val();
	var grouprefreshtime=$('#grouprefreshtime').val();
	var data="Group_id="+groupId+"&projectId="+projectId+"&grouprefreshtime="+grouprefreshtime;
	$.get('/TP/Home/Task/groupRefresh',data,function(data){
		clearInterval(taskTimmer);
		var res=JSON.parse(data);
		if(res['res']=='false'){
			taskTimmer=setInterval(refreshGroup,1500);
		}else{		
			//点击切换组的隐藏块
			$('#hidden-showGroup').click();//在这个方法里面点击了要切换的组
			//$(".hiddenGroup[data-id='"+groupId+"']").click();
			//设置好计时器
			$('#grouprefreshtime').val(res['refreshtime']);
			taskTimmer=setInterval(refreshGroup,1500);
		}
		
	});
}

//点击显示菜单
//function showMenu(){
//	$('.menu-close').click();
//	var left=$(this).offset()['left']-130;
//	var top=$(this).offset()['top']-70;
//	$('.yue-stagemenu').css({'left':left,'top':top,'display':'block'});
//	stageHead=$(this).parents('.Stage-head');
//	stage=$(this).parents('.Stage');
//	stageName=$(this).parents('.Stage-head').attr('data-stageName');
//	editStageId=$(this).parents('.Stage').attr('data-id');
//}

//陈文越点击任务相关 右侧滑出
//点击日程相关  也会触发  赵凯慧***************************************************
function taskIn(e){

	var clientWidth=document.documentElement.clientWidth;
	var mainWidth=clientWidth-$('#userinfo').width();
	e.stopPropagation();
	//关闭所有右侧的详情
	$('#cqy-shareBox').css('display','none');
	$('#yue-taskRight').css({left:mainWidth+'px',width:'0px',opacity:'0'});
	$('.yue-comment').css({bottom:'-72px'});
	$('#yue-diaryRight').css({left:mainWidth+'px',width:'0px',opacity:'0'});
	
	
	$('#cyq_qx').click();
	if($(this).attr('tab')=='2'){

	//	$('#taskrefreshtime').val(Date.parse(new Date())/1000);

		//右侧任务动画
//		if($('#yue-taskRight').width()>0){
//			if($(this).attr('data-id')==$('#yue-taskRight').attr('data-id')){
//				$('#yue-taskRight').animate({width:'0px',left:mainWidth+'px',opacity:'0'},200,function(){
//					$('.yue-comment').animate({bottom:'-72px'},0);
//				});
//			}else{
//				//先出去再进来
//				$('#yue-taskRight').animate({width:'0px',left:mainWidth+'px',opacity:'0'},200,function(){
//					$('.yue-comment').animate({bottom:'-72px'},0);
//				});
//				 $('#yue-taskRight').animate({width:'560px',left:mainWidth-560+'px',opacity:'1'},300,function(){
//					 	$('.yue-comment').animate({bottom:'0px'},400);
//					 });
//			}
//		}else{
//		//任务滑进
//		 $('#yue-taskRight').animate({width:'560px',left:mainWidth-560+'px',opacity:'1'},200,function(){
//		 	$('.yue-comment').animate({bottom:'0px'},400);
//		 });
//		}
		//右侧任务动画结束
		$('#yue-taskRight').animate({width:'0px',left:mainWidth+'px',opacity:'0'},200,function(){
			$('.yue-comment').animate({bottom:'-72px'},0);
		});
		 $('#yue-taskRight').animate({width:'560px',left:mainWidth-560+'px',opacity:'1'},300,function(){
				$('.yue-comment').animate({bottom:'0px'},400);
			 });
		
		
		
		$('#yue-taskRight').attr('data-id',$(this).attr('data-id'));
		var taskId=$(this).attr('data-id');
		$.get('/TP/Home/Task/getTask/Task_id/'+$(this).attr('data-id'),function(data){
			//加载右侧任务详情
			getTask(taskId,data);
		});
		
		
		

		
		
		 
		//阻止事件冒泡
		 return false;
		
		
	}else if($(this).attr('tab')=="3"){
	//赵凯慧日程右侧滑入框*************************************************************************************************
		$(document).resize();
		$('.diary-commentcontent').val('');
		var clientWidth=document.documentElement.clientWidth;
		var mainWidth=clientWidth-$('#userinfo-bubai').width();
		$('#cqy-shareBox').css('display','none');
		$('#yue-taskRight').css({left:mainWidth+'px',width:'0px',opacity:'0'});
		$('.yue-comment').css({bottom:'-72px'});

		

		 $('#yue-diaryRight').animate({left:mainWidth-560+'px',width:'560px',opacity:'1'},400,function(){
			$('.yue-comment').animate({bottom:'0px'},300);
		 });

		var tab=$(this).attr('tab');
		var data_id=$(this).attr('data-id');
		var diary_projectId=$('#projectId').val();
		var diary_right='data_id='+data_id+'&project_Id='+diary_projectId+'&tab='+tab;
		//读取右侧详情数据
		$.get('/TP/Home/Diary/rightajax',diary_right,function(data){
			
			relevance_id=data[0].Relevance_id;
			if(data[0].Repeat==0){
				data[0].Repeat='不重复';
			}
			$('#yue-diaryRight h4').html(data[0].Relevance_title);
			$('#yue-diaryRight .diaryRight-address').html(data[0].Address);
			$('#yue-diaryRight #diaryRight-start').html(data[0].Start_time);
			$('#yue-diaryRight #diaryRight-stop').html(data[0].Stop_time);
			$('#yue-diaryRight #diaryRight-repeat').html(data[0].Repeat);
			$('#yue-diaryRight #diaryRight-memo').html(data[0].Relevance_memo);
			var right_memo=$('#yue-diaryRight #diaryRight-memo').html();
			$('#kai-diaryclause').attr('content',right_memo);
			$('#bc-diaryclause').attr('data-id',data[0].Relevance_id);
			$('#yue-diaryRight').attr('data-id',data[0].Relevance_id);

			//查询出参与者
			var imgs='';
			for(var i in data[1]){
				imgs+="<img user-id='"+data[1][i]['User_id']+"' class='remove_user' src='/TP/Public/images/"+data[1][i]['Face']+"' />";
			}

			$('#diaryRight-images').find('img').remove();
			$('#diaryRight-images').prepend($(imgs));

			$('.remove_user').off('click');
			// 点击参与者头像移除该参与者
			$('.remove_user').click(removeUser);


			//显示该条日程的评论
			var diary_discuss='';
			for(i in data[2]){
				diary_discuss+='<li><div><img class="mCS_img_loaded" src="/TP/Public/images/'+data[2][i]['Face']+'"><span class="kai-activeleft">'+data[2][i]['User_name']+' : '+data[2][i]['Content']+'</span><span class="kai-activeright">'+data[2][i]['Create_time']+'</span></div></li>';
			}
			$('#yue-diaryactive').find('ul').find('li').remove();
			$('#yue-diaryactive').find('ul').prepend(diary_discuss);
										
		});
					
		//在diary的右侧滑入框中点击保存，输入的内容会显示到备忘中去
		$('#bc-diaryclause').click(function(){		
			var diarymemo_textarea=$('#diaryclause').val();
			var data_id=$(this).attr('data-id');
			var right_data='data_id='+data_id+'&diary_memo='+diarymemo_textarea;
			$.get('/TP/Home/Diary/memoajax',right_data,function(data){
				if(data!=0){
					$('#diaryRight-memo').html(data);
					$('#kai-diaryclause').attr('content',data);
				}else{
					$('#diaryRight-memo').html('添加备忘');
				}
			});
			$('#diarymemo-update').hide();
		});


		//添加参与者模块**************************************************************************************************
		//点击右侧滑入框加号，添加参与者
		$('#diary-addman').click(function(){
			var top=$(this).offset().top-30+'px';
			var left=$(this).offset().left+'px';
			$('#yue-diaryRight .diaryRight-man').css({'left':'50px','top':'300px'});
			$('#yue-diaryRight .diaryRight-man').show();

			var projectId=$('#projectId').val();


			var relevance_id=$('#yue-diaryRight').attr('data-id');

			var add_data='projectId='+projectId+'&relevance_id='+relevance_id;


			$.get('/TP/Home/Diary/addmanajax',add_data,function(data){
				console.dir(data);
				degree='';
				for(i in data){
					degree+='<li id="diary-degree" data-id="'+data[i]['User_id']+'"><img src="/TP/Public/images/'+data[i]['Face']+'"><span>'+data[i]['User_name']+'</span></li>'
				}

				$('#diary-degrees').find('li').remove();
				$('#diary-degrees').prepend(degree);


				//点击参与者li进行添加
				$('.diaryRight-man #diary-degree').click(function(){
					var user_id=$(this).attr('data-id');
					var relevance_id=$('#yue-diaryRight').attr('data-id');
					user_data='relevance_id='+relevance_id+'&user_id='+user_id;
					$.get('/TP/Home/Diary/adduserajax',user_data,function(data){
						var Face=data['Face'];

						//将该参与者加入到右侧滑入框参与者第一位
						var add_rightuser=$('<img class="remove_user" src="/TP/Public/images/'+Face+'" user-id="'+user_id+'">');
						add_rightuser.click(removeUser);



						$('#yue-diarypartake').find('#diaryRight-images').prepend(add_rightuser);
						//将该参与者加入到diary对应日程参与者的第一位
						var add_diaryuser='<img class="mCS_img_loaded" src="/TP/Public/images/'+Face+'" user-id="'+user_id+'">';
						$('.kai-diaryInOut').find('.show_right[data-id='+relevance_id+']').find('.list-right').find('div').prepend(add_diaryuser);
					});

						//点击该参与者 在该div中移除
						$(this).remove();
					
				});
			});




			return false;
		});
		

		//点其他地方  添加参与者div消失
		$('body').click(function(){
			$('#yue-diaryRight .diaryRight-man').hide();
		});

		//点击右侧滑入框 添加参与者div消失
		$('#yue-diaryRight').click(function(){
			$('#yue-diaryRight .diaryRight-man').hide();
		});

		//取消 添加参与者div冒泡
		$('#yue-diaryRight .diaryRight-man').click(function(event){
			event.stopPropagation();
		});
		//添加参与者模块结束**********************************************************************************************







		//赵凯慧 6-9  11:40 
		//点击 ‘更多’ 弹出框  取消时间冒泡
		$('.diaryRight-more').click(function(){
			return false;
		})
		//点击弹出框右上角的 ‘更多’ 弹出日程菜单框     
		$('.diaryMore-btn').click(function(){
			$('.diaryRight-more').show();
			return false;
		});


		//点其他地方  ’更多‘弹出框消失
		$('body').click(function(){
			$('.diaryRight-more').hide();
		});

		//点击右侧滑入框  ‘更多’弹出框消失
		$('#yue-diaryRight').click(function(){
			$('.diaryRight-more').hide();
		});

		//点击日程列表  ‘更多’弹出框消失
		$('.show_right').click(function(){
			$('.diaryRight-more').hide();
		})

		//点击  更多按钮去  先去掉点击事件
		$('.more-remove').unbind('click'); 


		// 点击  ’更多‘  中的删除日程  实现删除该日程
		$('.more-remove').click(function(){
			var remove_data='Relevance_id='+relevance_id;

			$.post('/TP/Home/Diary/ajaxremovediary',remove_data,function(data){
				//点击删除的同时移除日程页中的日程
				$('.remove_diaryli[data-id='+relevance_id+'][tab="3"]').remove();
				//点击删除的同时移除主页中的日程
				$('.remove_mydiary[data-id='+relevance_id+'][tab="3"]').remove();
				//点击删除的同时移除我的日程中的日程
				$('.show_right[data-id='+relevance_id+'][tab="3"]').parent('li').remove();

				//点击删除的同时收起右侧弹出框
				$('#yue-diaryRight').animate({left:mainWidth+'px',width:'0px',opacity:'0'},100,function(){
					$('.yue-comment').animate({bottom:'-72px'},0);
				});
			})
		})



		
		




		//赵凯慧日程右侧滑入框结束**********************************************************************************************
	}
	

	 
}
//任务右侧滑入框结束




//陈文越设置任务阶段可拖动
function setSort(){
	var clientWidth=document.documentElement.clientWidth;
	var mainWidth=clientWidth-$('#userinfo-bubai').width();
	if($('#userinfo-bubai').width()!=0){
		mainWidth-=16;
	}
	
	var stage_source;//jquery对象
	$( ".Stage-ul" ).sortable({
		 placeholder: "placeholder",
		 connectWith: ".Stage-ul",
		 forcePlaceholderSize:true,
		 delay: 50,
		 //开始开始时触发	
		 start:function(event,ui){
			 stage_source=ui.item.parents('.Stage')
		 },
		 stop:function(event , ui){
			 $('#yue-taskRight').css({width:'0px',left:mainWidth+'px',opacity:'0'});
			 $('.yue-comment').css({bottom:'-72px'});
			 $('.show_right').off('click');
			 
			 
			var taskId=ui.item.attr('data-id');
			var stage_dst=ui.item.parents('.Stage');
			var stageId=stage_dst.attr('data-id');
			var stageId_source=stage_source.attr('data-id');//原来阶段的ID
			var sourceOrder="";
			var dstOrder="";
			stage_source.find('ul > li').each(function(){
				sourceOrder+=$(this).attr('data-id')+',';
			});	  
			ui.item.parent().find('li').each(function(){
				dstOrder+=$(this).attr('data-id')+',';
			});
			sourceOrder=sourceOrder.substr(0,sourceOrder.length-1);//原来的位置的最后排序结果
			//alert(sourceOrder);
			dstOrder=dstOrder.substr(0,dstOrder.length-1);//目标排序结果
			
			var projectId=$('#projectId').val();
			var data="taskId="+taskId+"&stageId="+stageId+"&dstOrder="+dstOrder+"&stageId_source="+stageId_source+"&sourceOrder="+sourceOrder+"&Project_id="+projectId;
			
			$.post("/TP/Home/Task/ajaxTaskSort",data,function(data){
				$('.show_right').click(taskIn);
				
			});
			//加载阶段任务进度
			getSchedule();
			finalLine();
			
		 }	
	 });
   
   $('.Stage-ul' ).sortable( "option", "dropOnEmpty", true );
   $( ".Stage-ul" ).disableSelection();
   //阶段排序
   
   $( "#Stage-move" ).sortable({

		 placeholder: "Stageholder",
		 cursor:'move',
		 forcePlaceholderSize:true,
		 //开始开始时触发	
		 stop:function(event ,ui){
			var groupOrder="";
			$('.Stage').each(function(){
				groupOrder+=$(this).attr('data-id')+',';
			});
			groupOrder=groupOrder.substr(0,groupOrder.length-1);
			//ajax修改组里的阶段排序
			var data="Group_id="+$('#groupId').val()+"&groupOrder="+groupOrder;
			$.post('/TP/Home/Task/ajaxStageSort',data,function(){
				
			});
		 }

	  

	 });	
}






// kai-diary
//赵凯慧点击头像移除参与者 ************************************************************************************************
function removeUser(){
	var user_id=$(this).attr('user-id');
	var user_data='user_id='+user_id+'&relevance_id='+relevance_id;
	$.get('/TP/Home/Diary/removeuserajax',user_data,function(udata){

	});
	$(this).remove();
	$('.diaryIn-list[data-id='+relevance_id+']').find('.list-right').find('div').find('img[user-id='+user_id+']').remove();
}







//日程滑进
//先设置日程框的Left  **********************
var clientWidth=document.documentElement.clientWidth;
var mainWidth=clientWidth-$('#userinfo-bubai').width();

	mainWidth-=16;

//alert($('#userinfo-bubai').width());
$('#yue-diaryRight').css('left',mainWidth+'px');


//$('#yue-diaryRight').animate({opacity:'1'},1000);

//将滑进div封装成函数
function diary_show(){
	$('#yue-diaryRight').animate({left:mainWidth-560+'px',width:'560px',opacity:'1'},100,function(){
		$('.yue-comment').animate({bottom:'0px'},0);
	});
}

//将滑出div封装成函数
function diary_hidden(){
	$('#yue-diaryRight').animate({left:mainWidth+'px',width:'0px',opacity:'0'},100,function(){
		$('.yue-comment').animate({bottom:'-72px'},0);
	});
}
//日程右侧滑入框结束
























//完成任务的方法
function upState(e){
	e.stopPropagation();
	var state_div=$(this);
	var taskId=$(this).parents('li').attr('data-id');
	var projectId=$('#projectId').val();
	var state="";
	if($(this).html()==""){
		state="已完成";
	}else{
		state="未完成";
	}
	var data="Task_id="+taskId+"&Project_id="+projectId+"&State="+state;
	
	$.get('/TP/Home/Task/upTaskState',data,function(data){
		if(data=='true'){
			if(state=="已完成"){
				state_div.css('background','#62DE0A').css('color','white');
				state_div.html('<i class="fa fa-check"></i>');
				
				//加载阶段任务进度
				getSchedule();
				finalLine();
				$('#yue-titleinfo').css('color','gray').css('text-decoration','line-through');
			}else if(state=='未完成'){
				state_div.css('background','white');
				state_div.html('');
				//加载阶段任务进度
				getSchedule();
				finalLine();
				$('#yue-titleinfo').css('color','black').css('text-decoration','none');
			}
			
			
		}else{
			alert(data);
		}
	});
}



//分享右侧滑入框	
	function shareIn(event){
		var par = $(this).attr('data-id');
		var tab = $(this).attr('tab');
		if(tab == 4){
			var box_wid = document.documentElement.clientWidth;
			var box_heig = document.documentElement.clientHeight;
			$('#cyq-shareBox').height(box_heig-52);
			$('#cyq-shareBox').css('left',box_wid-650+'px').show();
			$('.cyq-shareBoxmore').click(function(event){
				var moretop = $(this).offset()['top'];
				var moreleft = $(this).offset()['left']-1030;
				$('#cyq-shareList').css({'top':moretop+'px','left':moreleft+'px','z-index':'110'});
				$('#cyq-shareList').show();	
				event.stopPropagation();
			});
			$('.cyq-listTitle > .listClose').click(function(event){
				$('#cyq-shareList').hide();
				event.stopPropagation();
			});
			$('#cyq-shareBox').click(function(event){
				$('#cyq-shareList').hide();
				$('#cyq-shareMember').hide();
				event.stopPropagation();
			});
			$('.cyq-circle').click(function(event){
				var moretop = $(this).offset()['top']-260;
				var moreleft = $(this).offset()['left']-310;
				$('#cyq-shareMember').css({'top':moretop+'px','left':moreleft+'px','z-index':'105'});
				$('#cyq-shareMember').show();
				event.stopPropagation();
			});
			$('#cyq-shareMember').click(function(event){
				event.stopPropagation();
			});

			$.get("{:U('Share/shareLeftbox')}",'par='+par+'&tab='+tab,function(data){
				var data = JSON.parse(data);
				$('.cyq-shareBoxtitle > .share-title').html(data[0]['Share_title']);
				$('.cyq-shareBoxarticle').html(data[0]['Share_text']+'<input type="hidden" value="'+data[0]['User_id']+'">');
				// 删除分享
				$('.cyq-actList > .delete').click(function(){
					$('#cyq-shareList').hide();
					var user_id = $('.cyq-shareBoxarticle').children('input').val();


					$.get('/TP/Home/Share/shareDelete','share_id='+par+'&project_id='+Project_id+'&user_id='+user_id,function(data){
						alert(data);	
					});
					return true;
				});

			});
			$.get('/TP/Home/Share/review','project_id='+Project_id+'&share_id='+par,function(data){
				var data = JSON.parse(data);
				var str = '';
				for(var i=0;i<data.length;i++){
					str += '<li><a>'+data[i]['User_name']+' '+data[i]['Content']+'</a><a class="time">'+getLocalTime(data[i]['Review_time'])+'</a></li>';
				}
				$('.cyq-shareBoxcomment').html(str);
			});
			$.get('/TP/Home/Share/shareActor','share_id='+par,function(data){
				var data = JSON.parse(data);
				var str ='';
				for(var i=0;i<data.length;i++){
					str += '<input class="actors_id" id="actors_'+data[i]['User_id']+'" type="hidden" value="'+data[i]['User_id']+'"/>';
					str += '<img class="cyq-userimg tip" title="'+data[i]['User_name']+'" src="/TP/Public/images/'+data[i]['Face']+'">';
				}
				$('.cyq-shareBoxactor > .cyq-head').html(str);	

				//点击头像删除参与者
				$('.cyq-userimg').click(getUserdelete);
				
			});
			
			//添加参与者
			$.get('/TP/Home/Share/shareAddactor','project_id='+Project_id+'&share_id='+par,function(data){
				var data = JSON.parse(data);
				var str ='';
				for(var i=0;i<data.length;i++){
					str += '<div class="member1">';
					str += '<a class="cyq-head"><img src="/TP/Public/images/'+data[i]['Face']+'"></a>';
					str += '<a>'+data[i]['User_name']+'</a>';
					str += '<input class="actorUser_id" id="actorUser_'+data[i]['User_id']+'" type="hidden" value="'+data[i]['User_id']+'"/>';
					str += '<input class="cyq-check" type="checkbox" />';
					str += '</div>';
				}
				$('#cyq-shareMember > .members').html(str);

				//点击添加参与者
				$('.cyq-check').click(getChecked);
				
			});
			function getUserdelete(){
				var actorid = $(this).prev('.actors_id').val();
				$('#actors_'+actorid).next('img').remove();
				$('#actors_'+actorid).remove();
				$.get('/TP/Home/Share/deleteActor','project_id='+Project_id+'&userid='+actorid+'&shareid='+par,function(data){
					
				});
				$.get('/TP/Home/Share/shareAddactor','project_id='+Project_id+'&share_id='+par,function(data){
					var data = JSON.parse(data);
					var str ='';
					for(var i=0;i<data.length;i++){
						str += '<div class="member1">';
						str += '<a class="cyq-head"><img src="/TP/Public/images/'+data[i]['Face']+'"></a>';
						str += '<a>'+data[i]['User_name']+'</a>';
						str += '<input class="actorUser_id" id="actorUser_'+data[i]['User_id']+'" type="hidden" value="'+data[i]['User_id']+'"/>';
						str += '<input class="cyq-check" type="checkbox" />';
						str += '</div>';
					}
					
					$('#cyq-shareMember > .members').html(str);
					$('.cyq-check').click(getChecked);
				});
			}
			function getChecked(event){
				$('#cyq-shareMember').hide();
				var actorid = $(this).parent().children('.actorUser_id').val();
				var checked = $(this).parent().children('input:checked').length;
				$(this).parent().remove();
				
				$.get('/TP/Home/Share/addActor','project_id='+Project_id+'&userid='+actorid+'&length='+checked+'&shareid='+par,function(data){
					var data = JSON.parse(data);
					if(checked == 1){
						str = '<input class="actors_id" id="actors_'+data[0]['User_id']+'" type="hidden" value="'+data[0]['User_id']+'"/>';
						str += '<img class="cyq-userimg tip" title="'+data[0]['User_name']+'" src="/TP/Public/images/'+data[0]['Face']+'">';
						$('.cyq-shareBoxactor > .cyq-head').append(str);
					}else{
						$('#actors_'+data[0]['User_id']).next('img').remove();
						$('#actors_'+data[0]['User_id']).remove();
					};
					$('.cyq-userimg').click(getUserdelete);
				});
				event.stopPropagation();
			}
		
		}else{
			$('#cyq-shareBox').hide();
			$('#cyq-shareList').hide();
			$('#cyq-shareMember').hide();
		};
		event.stopPropagation();
	}
//分享右侧滑入框结束
