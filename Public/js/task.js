$(document).ready(function(){
	var clientWidth=document.documentElement.clientWidth;
	var clientHeight=document.documentElement.clientHeight;
	var mainWidth=clientWidth-$('#userinfo-bubai').width();
	
	
	$('.Task-li').click(function(e){
		e.stopPropagation();
		
	});
	
	
	//启用拖动排序 
	//任务排序
	setSort();
	//设置蒙版的宽高
	$('.yue-menban').width(clientWidth);
	$('.yue-menban').height(clientHeight);
	$('.yue-menban').css({'background':'#5D5D5D','opacity':'1'}).css('position','fixed').css('top','0').css('z-index','10001').css('display','none');
	
	/*以下是菜单*/
	

	//点击返回阶段菜单
	$('.return-Stage-Menu').click(function(){
		$('#stage-Edit').hide();
		$('#stage-Add').hide();
		$('#stage-Menu').show();
		return false;
	});
	//关闭菜单
	$('.menu-close').click(function(){
		$('.yue-stagemenu').hide();
		$('#stage-Edit').hide();
		$('#stage-Add').hide();
		$('#stage-Menu').show();
		$('.stage-text').val('');
	});
	//取消冒泡
	$('.yue-Task-Add').click(function(event){
		event.stopPropagation(); 
	});
	//关闭蒙版
	$('#add-Close').click(function(){
		$('.yue-menban').hide();
	});
	//点击蒙版关闭
	$('.yue-menban').click(function(){
		$(this).hide();
	});
	//点击添加任务弹出蒙版
	$('#li-Task-Add').click(function(){
		$(this).parents('.yue-stagemenu').hide();
		$('.yue-menban').show();
	});
	
	
	
	//添加任务里点击弹出参与者
	$("#yue-allotuser").click(function(){
		$('+div',this).toggle();
	});
	
	
	
	
	
	

	
	$('.show-Menu').click(function(){
		$('.menu-close').click();
		var left=$(this).offset()['left']-160;
		var top=$(this).offset()['top']-70;
		$('.yue-stagemenu').css({'left':left,'top':top,'display':'block'});
		stageHead=$(this).parents('.Stage-head');
		stage=$(this).parents('.Stage');
		stageName=$(this).parents('.Stage-head').attr('data-stageName');
		editStageId=$(this).parents('.Stage').attr('data-id');
	});
	//点击编辑阶段
	$('#li-Stage-Edit').click(function(){
		$('#stage-Menu').hide();
		$('#stage-Edit').show();
		$('#stageName-Edit').val(stageName);
		$('#stageName-Edit').focus();
		//让文本框值等于当前阶段
		return false;
	});
	//点击添加阶段
	$('#li-Stage-Add').click(function(){
		$('#stage-Menu').hide();
		$('#stage-Add').show();
	});
	//点击保存修改阶段  修改的阶段ID editStageId
	$('#stage-Save').click(function(){
		var data="Stage_id="+editStageId+"&Stage_name="+$('#stageName-Edit').val();
		$.post('/TP/Home/Task/ajaxStageEdit',data,function(d){
			if(d=='true'){
				stageHead.attr('data-stageName',$('#stageName-Edit').val());
				stageHead.find('label').html($('#stageName-Edit').val());
				$('.menu-close').click();
			}else{
				alert('修改失败');
			}
		});
	});
	
	
	//创建阶段 添加阶段
	$('#stage-Create').click(function(){
		var stageTitle=$('#stageName-Add').val();
		var stageId=stage.attr('data-id');
		var groupId=$('#groupId').val();
		var stageOrder="";
		$('.Stage').each(function(){
			stageOrder+=$(this).attr('data-id')+",";
			if($(this).attr('data-id')==stageId){
				stageOrder+="0,";
			}
		});	
		stageOrder=stageOrder.substr(0,stageOrder.length-1);
		var data="Stage_name="+stageTitle+"&Stage_id="+stageId+"&Group_id="+groupId+"&stageOrder="+stageOrder;
		$.post('/TP/Home/Task/ajaxStageAdd',data,function(data){
			var stage_div=$('<div class="Stage ui-sortable-handle" data-id='+data+'></div>');
			var stageHead_div = $('<div class="Stage-head" data-stagename="'+stageTitle+'" data-stageid="'+data+'"><label>'+stageTitle+'</label><span><i class="fa fa-angle-down show-Menu"></i></span><div class="crl"></div></div>');
			stage_div.append(stageHead_div);
			var stage_ul=$('<ul class="Stage-ul"></ul>');
			stage_div.append(stage_ul);
			stage.after(stage_div);
			$('.menu-close').click();
			setStageWidth();
			$('.show-Menu').off('click');
			$('.show-Menu').click(function(){
				$('.menu-close').click();
				var left=$(this).offset()['left']-160;
				var top=$(this).offset()['top']-70;
				$('.yue-stagemenu').css({'left':left,'top':top,'display':'block'});
				stageHead=$(this).parents('.Stage-head');
				stage=$(this).parents('.Stage');
				stageName=$(this).parents('.Stage-head').attr('data-stageName');
				editStageId=$(this).parents('.Stage').attr('data-id');
			});
			//加载任务进度
			getSchedule();
			finalLine();
			//设置滚动的高度
			$(document).resize();
		});
		
	});
	
	
	//删除阶段 
	/*
	
	var stageName="";//阶段名
	var editStageId;//点击阶段菜单时 要操作的阶段Id
	var stageHead;//点击菜单时选中的阶段标题
	var stage;//点击菜单时选中的阶段容器

	 */
	$('#li-Stage-Del').click(function(){
		var stageId=editStageId;
		var groupId=$('#groupId').val();
		var stageOrder="";
		$('.Stage').each(function(){
			if($(this).attr('data-id')!=editStageId){
			stageOrder+=$(this).attr('data-id')+',';}
		});
		stageOrder=stageOrder.substr(0,stageOrder.length-1);
		var data='Stage_id='+stageId+'&Group_id='+groupId+'&stageOrder='+stageOrder;
		$.get('/TP/Home/Task/ajaxStageDel',data,function(data){
		if(data=="true"){
			stage.remove();
			$('.menu-close').click();
		}else{
			
			$('.menu-close').click();
			alert('阶段内还有任务');
		}
		
	});
		
	});
	
	/*
	var stageName="";//阶段名
	var editStageId;//点击阶段菜单时 要操作的阶段Id
	var stageHead;//点击菜单时选中的阶段标题
	var stage;//点击菜单时选中的阶段容器
	 */
	//点击复选框修改参与者
	$('#yue-selectUser').get(0).checked=true;
	$('#yue-selectUser').click(function(){return false;});
	$('.yue-selectUser').change(function(){
		var face=$(this).attr('face');
		var data_id=$(this).val();
		if($(this).get(0).checked==true){
			//添加图片
			var img=$("<img  src='/TP/Public/images/"+face+"' data-id="+data_id+" class='yue-img-qxAllotUser' />");
			//给图片绑定点击事件
			img.click(function(){
				$(this).remove();
				var id=$(this).attr('data-id');
				$('.yue-selectUser[value='+data_id+']').get(0).checked=false;
			});
			$('#task-Add-Participator > img').last().after(img);
			
		}else{
			
			//删除图片
			$('.yue-img-qxAllotUser[data-id='+data_id+']').remove();
		}
	});
	
	
	
	/*
	var stageName="";//阶段名
	var editStageId;//点击阶段菜单时 要操作的阶段Id
	var stageHead;//点击菜单时选中的阶段标题
	var stage;//点击菜单时选中的阶段容器
	 */
	//添加任务
	//让优先级跟重复默认选中
	$('input[name=Priority]').get(0).checked=true;
	$('input[name=Repeat]').get(0).checked=true;
	$('#task-Add-create').click(function(){
		var task_Name=$('#yue-taskName').val();
		var cUser_id=$('#yue-taskCUser').attr('data-id');
		var stop_time=$('#yue-taskstime').val();
		var content=$('#yue-taskContent').val();
		var allot_uid="";
		var priority="";
		var repeat="";
		var projectId=$('#projectId').val();
		$('input[name=Priority]').each(function(){
			if($(this).get(0).checked==true){
				priority=$(this).val();
			}
		});
		$('input[name=Repeat]').each(function(){
			if($(this).get(0).checked==true){
				repeat=$(this).val();
			}
		});
		$('#task-Add-Participator > img').each(function(){
			allot_uid+=$(this).attr('data-id')+',';
		});
		allot_uid=allot_uid.substr(0,allot_uid.length-1);
		//拼接提交的数据
		var data="Task_name="+task_Name+"&Stop_time="+stop_time+"&Content="+content+"&Allot_uid="+allot_uid+"&priority="+priority+"&repeat="+repeat+"&User_id="+cUser_id+"&Stage_id="+editStageId+"&Project_id="+projectId;
		$.post("/TP/Home/Task/ajaxTaskAdd",data,function(data){
			
			$('.yue-menban').click();
			var task=JSON.parse(data);
			
			if(task['res']=='true'){
			//往页面添加一个任务
			var li=$("<li tab='2' class='Task-li show_right' data-id='"+task['lastId']+"'></li>");
			
			var div_pri=$("<div class='Task-priority up-taskPrior'></div><div class='Task-state'></div>");
			var div_content=$("<div class='Task-content'> <div class='Task-userimg'><img class='tip' src='/TP/Public/images/"+task['Face']+"' title='"+task['CUser_name']+"' /></div> <div class='Task-text'>"+task_Name+"</div> <div><span>"+task['Stop_time']+"</span></div>  </div><div style='clear:both'></div>");
			li.append(div_pri);
			li.append(div_content);
			//这里需要绑定一个滑出事件    完成了!!!!!!!!!!!!!!!!!！！！！！！！！！！！！！！！！
			li.click(taskIn);
			$('.Task-state').off('click');
			$('.Task-state').click(upState);
			stage.find('.Stage-ul').append(li);	
			//加载阶段任务进度
			getSchedule();
			finalLine();
			//绑定完成任务的方法
			$('.Task-state').off('click');
			$('.Task-state').click(upState);
			
			
			
			}
		});
		
	});
	
	//任务状态点击 完成任务
	$('.Task-state').click(upState);
	
	
	
	//点击页面让任务分组列表隐藏
	$('body').click(function(){
		$('#yue-groupList').hide();
	});
	//取消任务组列表事件冒泡
	$('#yue-groupList').click(function(e){
		e.stopPropagation();
	});
	//点击任务分组 出现所有组 
	$('#yue-showGroup').click(function(e){
		var  span=$(this);
		e.stopPropagation();
		var _left=$(this).offset()['left'];
		var _top=$(this).offset()['top'];
		$('#yue-groupList').css('left',_left-50+'px').css('top',_top+40+'px');
		$('#yue-groupList').show();
		
		var projectId=$('#projectId').val();
		//获取项目内所有组   切换组
		$.get('/TP/Home/Task/getAllGroup?Project_id='+projectId,function(data){
			$('#yue-groupList ul li').remove();
			var groups=JSON.parse(data);
			for(var i in groups){
				var li=$("<li class='selectGroup' data-id='"+groups[i]['Group_id']+"'>"+groups[i]['Group_name']+"</li>");
				$('#yue-groupList ul').append(li);
			}
			//给每个组绑定事件
			$('.selectGroup').click(function(){
				var selectli=$(this);
				var groupId=$(this).attr('data-id');
				var data="Group_id="+groupId+"&Project_id="+projectId;
				$.get('/TP/Home/Task/getstage',data,function(data){
					$('#Stage-move').html(data);
					//让组列表隐藏
					$('#yue-groupList').hide();
					//让重新可以拖动排序
					setSort();
					//重新绑定完成任务事件
					$('.Task-state').click(upState);
					//重新绑定点击右侧滑出的事件
					$('.show_right').click(taskIn);
					//重新设置滚动条
					var height=document.documentElement.clientHeight;
					$('.Stage-ul').height(height-230);
					//修改页面的组 隐藏字段
					$('#groupId').val(groupId);
					//阶段菜单事件绑定
					$('.show-Menu').click(function(){
						$('.menu-close').click();
						var left=$(this).offset()['left']-160;
						var top=$(this).offset()['top']-70;
						$('.yue-stagemenu').css({'left':left,'top':top,'display':'block'});
						stageHead=$(this).parents('.Stage-head');
						stage=$(this).parents('.Stage');
						stageName=$(this).parents('.Stage-head').attr('data-stageName');
						editStageId=$(this).parents('.Stage').attr('data-id');
					});
					//改页面上的组名
					span.html(selectli.text());
					//获取任务进度
					getSchedule();
					finalLine();
				});
			});
		});
		
	});
	
	//给隐藏的组列表绑定相同的事件
	$('#hidden-showGroup').click(function(e){
		e.stopPropagation();
		var projectId=$('#projectId').val();
		//获取项目内所有组   切换组
		$.get('/TP/Home/Task/getAllGroup?Project_id='+projectId,function(data){
			$('#hiddenGroupList li').remove();
			var groups=JSON.parse(data);
			for(var i in groups){
				var hli=$("<li class='hiddenGroup' data-id='"+groups[i]['Group_id']+"'>"+groups[i]['Group_name']+"</li>");
				$('#hiddenGroupList').append(hli);
			}
			//给每个组绑定事件
			$('.hiddenGroup').click(function(e){
				e.stopPropagation();
				var selectli=$(this);
				var groupId=$(this).attr('data-id');
				var data="Group_id="+groupId+"&Project_id="+projectId;
				$.get('/TP/Home/Task/getstage',data,function(data){
					$('#Stage-move').html(data);
					//让重新可以拖动排序
					setSort();
					//重新绑定完成任务事件
					$('.Task-state').click(upState);
					//重新绑定点击右侧滑出的事件
					$('.show_right').click(taskIn);
					//重新设置滚动条
					var height=document.documentElement.clientHeight;
					$('.Stage-ul').height(height-230);
					//修改页面的组 隐藏字段
					$('#groupId').val(groupId);
					//阶段菜单事件绑定
					$('.show-Menu').click(function(){
						$('.menu-close').click();
						var left=$(this).offset()['left']-160;
						var top=$(this).offset()['top']-70;
						$('.yue-stagemenu').css({'left':left,'top':top,'display':'block'});
						stageHead=$(this).parents('.Stage-head');
						stage=$(this).parents('.Stage');
						stageName=$(this).parents('.Stage-head').attr('data-stageName');
						editStageId=$(this).parents('.Stage').attr('data-id');
					});
					//获取任务进度
					getSchedule();
					finalLine();
				});
			});
			var gid=$('#groupId').val();
			$(".hiddenGroup[data-id='"+gid+"']").click();
		});
		
		
	});
	//隐藏的组列表结束
	
	
	
	//添加分组 添加组
	$('#addGroup').click(function(){
		var projectId=$('#projectId').val();
		var groupName=$('#yue-groupnName').val();
		var data="Project_id="+projectId+"&Group_name="+groupName;
		$.get('/TP/Home/Task/addGroup',data,function(data){
			var res=JSON.parse(data);
			if(res['flag']=='true'){
				$('#yue-groupList').hide();
				//这里需要切换组  模拟一下点击
				$('#yue-showGroup').click();	
				alert('添加成功');
				$('.selectGroup[data-id='+res['Group_id']+']').click();
			}else{
				alert(res['error']);
			}
			
		});
	});
	
	
	//去掉弹出的筛选编辑功能的事件冒泡
	$('#yue-groupEdit').click(function(e){
		e.stopPropagation();
	});
	
	//编辑组 筛选
	$('#yue-groupEditShow').click(function(e){
		e.stopPropagation();
		var _left=$(this).offset()['left'];
		var _top=$(this).offset()['top'];
		$('#yue-groupEdit').css('left',_left-100+'px').css('top',_top+50+'px').css('display','block');
		//这里读取出组名在 文本框  组名页面上有  yue-showGroup的html或text   组ID 页面上也有  groupId 
		$('#yue-groupEditName').val($('#yue-showGroup').text());
	});
	//保存编辑组名
	$('#yue-groupBc').click(function(){
		var groupId=$('#groupId').val();
		var groupName=$('#yue-groupEditName').val();
		var projectId=$('#projectId').val();
		var data="Group_id="+groupId+"&Group_name="+groupName+"&Project_id="+projectId;
		$.get('/TP/Home/Task/upGroup',data,function(data){
			if(data=="true"){
				$('#yue-groupEdit').hide();
				//页面上的组名修改
				$('#yue-showGroup').text(groupName);
			}else{
				alert(data);
			}
			
		});
		
	});
	
	//find 任务筛选
	$('#yue-taskFind').keyup(function(){
		$('.Task-li').hide();
		if($(this).val()==""){
			$('.Task-li').show();
		}
		$(".Task-text:contains('"+$(this).val()+"')").parents('.Task-li').show();
	});
	//变动的时候也要筛选
	$('#yue-taskFind').change(function(){
		$('.Task-li').hide();
		if($(this).val()==""){
			$('.Task-li').show();
		}
		$(".Task-text:contains('"+$(this).val()+"')").parents('.Task-li').show();
	});
	//点击body 让文本框清空 且隐藏筛选
	$('body').click(function(){
		$('#yue-taskFind').val('');
		$('#yue-groupEdit').hide();
		//在全部显示
		$('.Task-li').show();
		
		
	});
	
	
	//绑定弹出右侧事件
	$('.show_right').click(taskIn);
	
	//读取任务完成进度
	getSchedule();
	finalLine();
	
	
	//组同步刷新 同步更新 任务板同步更新
	clearInterval(taskTimmer);
	taskTimmer=setInterval(refreshGroup,1500);
	
	
	
});
