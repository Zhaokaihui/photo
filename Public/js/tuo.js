$(document).ready(function(){
	$('.Stage').mouseover(function(){
		//alert(1);
		console.log('进来了');
	});

	
	//点击获取任务卡
	$('.Task-li').mousedown(function(e){
		//获取点击任务卡的时候的偏移量
		var move_task=$(this); //获取移动的模块
		var move_index=$(this).index(); //记录移动模块的索引 0开始
		var move_parent=$(this).parent();
		var y=e.clientY-$(this).offset()['top']; //计算偏移量
		var x=e.clientX-$(this).offset()['left'];
		var src_x=e.clientX; //鼠标的源X位置
		var src_y=e.clientY; //鼠标的源Y位置
		//alert(src_y);
		var placeholder = $('<div id="task-placeholder"></div>');
		placeholder.height(move_task.height());
		var flag=true;
	
		$(document).mousemove(function(e){
			
			
			//替换一个补白
			if(flag){
				if(move_index==0){
					move_parent.prepend(placeholder);
				}else{
					$(move_parent.children()[move_index-1]).after(placeholder);
					//console.log(move_parent.children());
				
				}
				//为了只执行一次
				flag=false;
			}

			
			//随着鼠标移动
			move_task.attr('id','move_task').css('top',e.clientY-y).css('left',e.clientX-x);
			
			//如果鼠标往下移动
			if(e.clientY-src_y >0){
				//if(e.clientY>move_parent.)
				
				
				
			}
			
			
			//如果鼠标往上移动
			if(e.clientY-src_y <0){
				
			}
			
			
			
			
			
			$(document).mouseup(function(){
				//$('#task-placeholder').replaceWith(move_task.attr('id','').css('top','0').css('left','0'));
				move_task.attr('id','').css('top','0').css('left','0');
				$('#task-placeholder').remove();
				$(document).off('mousemove');
				//$('.Stage').off('mouseenter');
			});
			
			
			
			
			
			//鼠标移动事件结束
			
			src_y=e.clientY;//实时判定用
		});
		
		

		
		
	});
	
	
	
	
	
	
	
	
});