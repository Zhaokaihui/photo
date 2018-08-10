    function getLocalTime(nS) {     
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");      
    } 

  
$(document).ready(function(){
	//点击右侧任务框修改任务名
	$('#yue-taskRight').click(function(){
		var val=$('#title').val();
		var taskId=$(this).attr('data-id');
		var projectId=$('#projectId').val();
		if(val=="" || val==null){
			var oName=$('#yue-titleinfo').attr('taskname');
			$('#yue-titleinfo').html(oName);
		}else{
			//修改数据库 然后填入值
			var data="Task_id="+taskId+"&Task_name="+val+"&Project_id="+projectId;
			$.get('/TP/Home/Task/upTaskTitle',data,function(data){
				//改完后修改右侧框的任务名
				if(data=='true'){
					$('#yue-titleinfo').html(val);
					$('#yue-titleinfo').attr('taskname',val);
					//再修改页面上的任务的任务名
					$('.Task-li[data-id='+taskId+']').find('.Task-content').find('.Task-text').text(val);
					//该我的任务
					$("#myTask li[data-id='"+taskId+"']").find('.myTaskName').html(val);
					
				}else{
					$('#yue-titleinfo').html($('#yue-titleinfo').attr('taskname'));
					alert(data);
					
				}
			}); 
		}				
		
		
		

		
		//重新绑定事件
		$('#yue-titleinfo').off('click');
		$('#yue-titleinfo').click(function(){
			_text=$('#yue-titleinfo').text();
			$(this).html('');
			
			var _input=$('<input type="text" id="title" name="title" />');
			_input.css('border','0px').css('height','33px').css('width','100%').css('font-size','20px').css('background','#EEE').css('font-family','微软雅黑');
			$(this).append(_input);
			_input.val(_text);
			//_input.focus();
			_input.click(function(){return false;});
			$(this).off('click');
			return false;
		});
		
		return false;
		});
	
	
	
	
	
	
	
	//日程评论
	//点击发布实现发布评论 并添加到数据库
	$('.diary-commentsubmit').click(function(){
		var Content=$('.diary-commentcontent').val();
		var relevance_id=$('#yue-diaryRight').attr('data-id');
		var tab=$(this).attr('tab');

		var discuss_data='Discuss_tab='+tab+'&relevance_id='+relevance_id+'&Content='+Content;

		$.get('/TP/Home/Diary/discussajax',discuss_data,function(data){
			diary_discuss='<li><div><img class="mCS_img_loaded" src="/TP/Public/images/'+data['Face']+'"><span class="kai-activeleft">'+data['User_name']+' : '+data['Content']+'</span><span class="kai-activeright">'+data['Create_time']+'</span></div></li>';
			$('#yue-diaryactive').find('ul').prepend(diary_discuss);
			
		});
			$('.diary-commentcontent').val('');


	});

	
	
	
	//让用户列表框不显示
	$('#yue-taskRight').click(function(){
		$('#right_taskUserAdd').css('display','none');
	});
	//点击参与者的加号加载没参与的用户
	$('#yue-partakeadd').click(function(e){
		e.stopPropagation();
		//获取不在参与者的用户
		var projectId=$('#projectId').val();//项目ID
		var taskId=$(this).parents('#yue-taskRight').attr('data-id');//任务ID
		var data="Project_id="+projectId+"&Task_id="+taskId;
		$.get('/TP/Home/Task/getnAllotUsers',data,function(data){
			var Users=JSON.parse(data);
			var li="";
			if(Users.length!=0){
			for(var i=0;i<Users.length;i++){
				li+="<li><input class='right_addUser' type='checkbox' user-name='"+Users[i]['User_name']+"' face='"+Users[i]['Face']+"' value='"+Users[i]['User_id']+"'/><img src='/TP/Public/images/"+Users[i]['Face']+"'/>"+Users[i]['User_name']+"</li>";
			}
			
			$('#right_taskUserAdd').find('li').remove();
			$('#right_taskUserAdd').prepend($(li));
			//这里需要绑定一个复选框绑定事件 完成！！！！！！！！！！！！！！！！！！！！！！！
			$('.right_addUser').click(function(e){
				e.stopPropagation();
				var User_id = $(this).val();
				var face=$(this).attr('face');
				var User_name=$(this).attr('user-name');
				var liremove=$(this).parent();
				var data="User_id="+User_id+"&Task_id="+taskId;
				$.post('/TP/Home/Task/addTaskAllot',data,function(data){
					if(data=='true'){
					liremove.remove();
					var img="<img class='yue-partakeimg tip' data-id='"+User_id+"' title='"+User_name+"' src='/TP/Public/images/"+face+"' />";
					//添加一个头像 并绑定事件    完成了6.2 23.00！！！！！！！！！！！！！！！！！！！！！！！！！！！
					var $img=$(img);
					$img.click(function(){
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
					
					$('#yue-taskpartake p').eq(1).prepend($img);
					
					
					}else{
						alert('添加失败');
					}
				});
			});
			}else{
				//没有不参与的时候
				$('#right_taskUserAdd').find('li').remove();
				alert('全部成员参与了');
				
			}
		});
		
		
		$('#right_taskUserAdd').css('display','block');
	});
	
	
	
	//6.3 陈文越 修改优先级
	$('#yue-upPrior').click(function(e){
		e.stopPropagation();
	});
	$('#yue-upPrior ul li').click(function(){
		var taskId=$('#yue-taskRight').attr('data-id');
		var Pri=$(this).text();
		var projectId=$('#projectId').val();
		var data="Task_id="+taskId+"&Priority="+Pri+"&Project_id="+projectId;
		$.get('/TP/Home/Task/upTaskPriority',data,function(data){
			if(data=='true'){
			//修改右侧框的优先级
			$('#yue-pri').html(Pri);
			var color="";
			if(Pri=="普通")
			{
				color="#A6A9AA";
			}
			else if(Pri=="紧急"){
				color="orange";
			}else{
				color="red";
			}
			$('#yue-pri').prev().css('color',color);
			$('#yue-upPrior').hide();
			//修改页面上的颜色!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			$('.Task-li[data-id='+taskId+']').find('.Task-priority').css('background',color);
			//该我的任务
			$("#myTask li[data-id='"+taskId+"']").find('.myTaskPriority').css('background',color);
			}else{
				$('#yue-upPrior').hide();
				alert(data);
			}
			
		});
		
	});
	
	//6.3 陈文越 修改重复
	$('#yue-upRepeat').click(function(e){
		e.stopPropagation();
	});
	$('#yue-upRepeat ul li').click(function(){
		var taskId=$('#yue-taskRight').attr('data-id');
		var repeat=$(this).text();
		var projectId=$('#projectId').val();
		var data="Task_id="+taskId+"&Repeat="+repeat+"&Project_id="+projectId;
		$.get('/TP/Home/Task/upTaskRepeat',data,function(data){
			if(data=='true'){
				$('#yue-rep').text(repeat);
				$('#yue-upRepeat').hide();
			}else{
				$('#yue-upRepeat').hide();
				alert(data);
			}
		});
	});
	
	//6.3 陈文越  修改任务内容 在comment.js脚本里
	
	//6.3 陈文越右侧任务框详细 里面的任务备注
	$('#bc-taskclause').click(function(){
		var content=$('#taskclause').val();//备忘内容
		var projectId=$('#projectId').val();
		var taskId=$('#yue-taskRight').attr('data-id');
		var data="Content="+content+"&Project_id="+projectId+"&Task_id="+taskId;
		$.get('/TP/Home/Task/addTaskContent',data,function(data){
			if(data=='true'){
				$('#yue-taskclause').attr('content',content);
				$('#cyq_qx').click();
			}else{
				$('#cyq_qx').click();
				alert(data);
			}
			
		});
	});
	
	
	//6.3陈文越右侧任务详情里面的添加子任务
	$('#bc-sontask').click(function(){
		var taskId=$('#yue-taskRight').attr('data-id');
		var content=$('#sonTask-content').val();
		var projectId=$('#projectId').val();
		var data="Task_id="+taskId+"&Content="+content+"&Project_id="+projectId;
		$.post('/TP/Home/Task/addSonTask',data,function(data){
			var sonTask=JSON.parse(data);
			if(sonTask['flag']=='true'){
				var li=$("<li data-id='"+sonTask['Son_id']+"'></li>");
				var span1=$("<span>"+sonTask['User_name']+" "+content+"</span>");
				var span2=$("<span class='removeSon'><i class='fa fa-close sonremove'></i></span>");
				//绑定删除子任务的事件
				span2.click(function(){
					var removeli=$(this).parent();
					var sonId=$(this).parent().attr('data-id');
					var projectId=$('#projectId').val();
					var data="Son_id="+sonId+"&Task_id="+$('#yue-taskRight').attr('data-id')+"&Project_id="+projectId;
					$.get('/TP/Home/Task/removeSonTask',data,function(data){
						if(data=='true'){
							removeli.remove();
						}else{
							alert(data);
						}
					});
				});
				li.append(span1);
				li.append(span2);
				$('#sonTsak').append(li);
				$('#cyq_sonqx').click();
			}else{
				$('#cyq_sonqx').click();
				alert(sonTask['error']);
			}
			
		});
	});
	
	//6.3 陈文越 添加评论
	$('.task-commentSubmit').click(function(){
		var taskId=$('#yue-taskRight').attr('data-id');
		var projectId=$('#projectId').val();
		var content=$('.task-commentText').val();
		var data="Task_id="+taskId+"&Content="+content+"&Project_id="+projectId;
		$.post('/TP/Home/Task/addTaskComment',data,function(data){
			var discuss=JSON.parse(data);
			if(discuss['flag']=='true'){
				$('.task-commentText').val('');//清空评论文本框
				//给页面添加一条记录
				var li=$("<li><div> <img src='/TP/Public/images/"+discuss['Face']+"'/> <span class='yue-activeleft'>"+discuss['User_name']+" : "+content+"</span> <span class='yue-activeright'>"+getLocalTime(discuss['Create_time'])+"</span> </div></li>");
				$('#yue-taskactive ul').prepend(li);
			}else{
				alert('添加评论失败');
			}
		});
	});
	
});