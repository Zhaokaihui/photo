$(document).ready(function(){

	var share_id = $('.cyq-titleHead').first().children('.share_id').val();
	$('#cyq-shareId').html('<input type="hidden" value="'+share_id+'"/>');
	var scrhei = document.documentElement.clientHeight-180;
	$('.cyq-shareRight').height(scrhei);
	//我的分享
	$('.cyq-sharePlus > .a1').click(function(event){
		$('#cyq-shareAll').show();
		event.stopPropagation();
	});
	$('#cyq-shareWall').click(function(event){
		$('#cyq-shareAll').hide();
		event.stopPropagation();
	});
	$('.editClose').click(function(event){
		$('#cyq-editShare').hide();
		event.stopPropagation();
	});
	//更多
	$('.cyq-shareMsg  .more').click(function(event){
		$('#cyq-shareList').show();
		event.stopPropagation();
	});
	$('.cyq-listTitle  .listClose').click(function(event){
		$('#cyq-shareList').hide();
		event.stopPropagation();
	});
	$('#cyq-shareWall').click(function(event){
		$('#cyq-shareList').hide();
		event.stopPropagation();
	});
	$('#cyq-shareList').click(function(event){
		event.stopPropagation();
	});

	//添加分享	
	$('.cyq-sharePlus > .a2').click(function(event){
		var wid = document.documentElement.clientWidth;
		var hei = document.documentElement.clientHeight;
		$('#cyq-editShare').css({'width':wid,'height':hei});
		$('.editTxt').val('');
		$('.textarea > textarea').val('');
		$('#cyq-editShare').show();
		$('.publish').show();
		$('.update').hide();
		event.stopPropagation(); 
	});
	//编辑
	$('.compile').click(function(event){
		var wid = document.documentElement.clientWidth;
		var hei = document.documentElement.clientHeight;
		$('#cyq-editShare').css({'width':wid,'height':hei});
		$('#cyq-shareList').hide();
		$('#cyq-editShare').show();
		$('.editTxt').val($('.cyq-shareMsg > .title').html());
		$('.textarea > textarea').val($('.cyq-shareMsg > .article').html());
		$('.publish').hide();
		$('.update').show();

		event.stopPropagation();
	});
	//更新
	$('.update').click(function(event){
		$('#cyq-editShare').hide();
		$('.cyq-shareMsg > .title').html($('.editTxt').val());
		$('.cyq-shareMsg > .article').html($('.textarea > textarea').val());
		event.stopPropagation();
	});
	//发布
	$('.publish').click(function(event){
		$('#cyq-editShare').hide();
		event.stopPropagation();
	});
	//添加成员
	$('.cyq-party > .cyq-circle').click(function(event){
		$('#cyq-shareMember').show();
		event.stopPropagation();
	});

	$('.allMember').click(function(event){
		$('#cyq-shareMember').show();
		event.stopPropagation();
	});
	$('#cyq-shareMember').click(function(event){
		event.stopPropagation();
	});
	$('#cyq-shareWall').click(function(event){
		$('#cyq-shareMember').hide();
		event.stopPropagation();
	});
	$('.cyq-titleHead').eq(0).css('background','#FAFAFA');

	//评论
	$('.cyq-commentInset').click(function(){
		var content = $('.cyq-content > input').val();
		var share_id = $('#cyq-shareId').children('input').val();
		$.get('/TP/Home/Share/shareComment','content='+content+'&shareid='+share_id,function(data){
			if(data){
				alert('评论已发表！');
				$('.cyq-content > input').val('');
				$('.cyq-comments').find('i').click();
			};
			
		});
	});
	//点击读取评论
	$(".cyq-comments i").mouseover(function(){
		var cyq_wid = $(this).offset()['left']-80;
		var cyq_hei = $(this).offset()['top']-160;
		$('#cyq-thisComment').css({'top':cyq_hei+'px','left':cyq_wid+'px','z-index':'115'});
	  	$('#cyq-thisComment').show();
	});
	$(".cyq-comments i").mouseout(function(){
	  	$('#cyq-thisComment').hide();
	});
	$('.cyq-comments i').click(function(){
		var shareid = $('#cyq-shareId').children('input').val();
		$.get('/TP/Home/Share/commentSelect','share_id='+shareid,function(data){
			var data = JSON.parse(data);
			var str = '';
			for(var i=0;i<data.length;i++){
				str += '<li><a>'+data[i]['User_name']+' : '+data[i]['Content']+'</a><a class="time">'+getLocalTime(data[i]['Create_time'])+'</a></li>';
			}
			$('.cyq-titleMain > .titleUl').html(str);
		});
	});


	//点击添加参与者
	$('.cyq-check').click(getChecked);
	function getChecked(){
		$('#cyq-shareMember').hide();
		var project_id = $('#project_id').val();
		var share_id = $('#cyq-shareId').children('input').val();
		var actorid = $(this).parent().children('.actorUser_id').val();
		var checked = $(this).parent().children('input:checked').length;
		$(this).parent().remove();
		
		$.get('/TP/Home/Share/addActor','project_id='+project_id+'&userid='+actorid+'&length='+checked+'&shareid='+share_id,function(data){
			var data = JSON.parse(data);
			if(checked == 1){
				str = '<input class="actors_id" id="actors_'+data[0]['User_id']+'" type="hidden" value="'+data[0]['User_id']+'"/>';
				str += '<img class="cyq-userimg tip" title="'+data[0]['User_name']+'" src="/TP/Public/images/'+data[0]['Face']+'">';
				$('.cyq-party > .cyq-head').append(str);	
			}else{
				$('#actors_'+data[0]['User_id']).next('img').remove();
				$('#actors_'+data[0]['User_id']).remove();
			};
			$('.cyq-userimg').click(getUserdelete);
		});
		
	}

	//点击头像删除参与者
	$('.cyq-userimg').click(getUserdelete);
	function getUserdelete(){
		var project_id = $('#project_id').val();
		var share_id = $('#cyq-shareId').children('input').val();
		var actorid = $(this).prev('.actors_id').val();
		$('#actors_'+actorid).next('img').remove();
		$('#actors_'+actorid).remove();
		$.get('/TP/Home/Share/deleteActor','project_id='+project_id+'&userid='+actorid+'&shareid='+share_id,function(data){

		});
		$.get('/TP/Home/Share/shareAddactor','project_id='+project_id+'&share_id='+share_id,function(data){
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
			$('.members').html(str);
			$('.cyq-check').click(getChecked);
		});
	}

	//点击读取所有分享
	$('#cyq-shareAll > .allshare').click(allshares);
	function allshares(){
		var project_id = $('#project_id').val();
		$.get('/TP/Home/Share/allSharelist','project_id='+project_id,function(data){
			var data = JSON.parse(data);
			var str ='';
			for(var i=0;i<data.length;i++){
				str += '<div class="cyq-titleHead">'
				str += '<input class="share_id" type="hidden" value="'+data[i]['Share_id']+'"/>';
				str += '<input class="user_id" type="hidden" value="'+data[i]['User_id']+'"/>';
				str += '<div class="cyq-head"><img src="/TP/Public/images/'+data[i]['Face']+'"></div>';
				str += '<div class="cyq-inform">';
				str += '<a class="cyq-headText">'+data[i]['Share_title']+'</a><br/>';
				str += '<a class="cyq-headDate">'+data[i]['User_name']+'发布于 '+getLocalTime(data[i]['Create_time'])+'</a>';
				str += '</div>';
				str += '</div>';
				
			}
			$('#cyq-shareText').html(str);			
			$('.cyq-titleHead').click(getShare);
			$('.cyq-titleHead').first().click();
		});
	}
	//点击读取我的分享
	$('#cyq-shareAll > .myshare').click(function(){
		var project_id = $('#project_id').val();
		$.get('/TP/Home/Share/mySharelist','project_id='+project_id,function(data){
			var data = JSON.parse(data);
			var str ='';
			for(var i=0;i<data.length;i++){
				str += '<div id="cyq-shareId"></div>';
				str += '<div class="cyq-titleHead">';
				str += '<input class="share_id" type="hidden" value="'+data[i]['Share_id']+'"/>';
				str += '<input class="user_id" type="hidden" value="'+data[i]['User_id']+'"/>';
				str += '<div class="cyq-head"><img src="/TP/Public/images/'+data[i]['Face']+'"></div>';
				str += '<div class="cyq-inform">';
				str += '<a class="cyq-headText">'+data[i]['Share_title']+'</a><br/>';
				str += '<a class="cyq-headDate">'+data[i]['User_name']+'发布于 '+getLocalTime(data[i]['Create_time'])+'</a>';
				str += '</div>';
				str += '</div>';
				
			}
			$('#cyq-shareText').html(str);
			$('.cyq-titleHead').click(getShare);
			$('.cyq-titleHead').first().click();

		});
	});

	//点击读取分享详情
	function getShare(){
		$(this).css('background','#FAFAFA').siblings().css('background','');
		var share_id = $(this).children('.share_id').val();
		var project_id = $('#project_id').val();

		//分享详情
		$('#cyq-shareId').html('<input id="sharethisId" type="hidden" value="'+share_id+'"/>');
		$.get('/TP/Home/Share/shareTitle','share_id='+share_id,function(data){
			var data = JSON.parse(data);
			$('#cyq-thisTitle').html(data[0]['Share_title']);
			$('#cyq-article').html(data[0]['Share_text']);
		});
		//参与者
		$.get('/TP/Home/Share/shareActor','share_id='+share_id,function(data){
			var data = JSON.parse(data);
			var str ='';
			for(var i=0;i<data.length;i++){
				str += '<input class="actors_id" id="actors_'+data[i]['User_id']+'" type="hidden" value="'+data[i]['User_id']+'"/>';
				str += '<img class="cyq-userimg tip" title="'+data[i]['User_name']+'" src="/TP/Public/images/'+data[i]['Face']+'">';
				
			}
			$('.cyq-party > .cyq-head').html(str);
			$('.cyq-userimg').click(getUserdelete);			
		});
		//添加参与者
		$.get('/TP/Home/Share/shareAddactor','project_id='+project_id+'&share_id='+share_id,function(data){
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
			
			$('.members').html(str);
			$('.cyq-check').click(getChecked);
		});
		
		var user_id = $(this).children('.user_id').val();
		//详细操作
		$.get('/TP/Home/Share/review','project_id='+project_id+'&share_id='+share_id,function(data){
			var data = JSON.parse(data);
			var str = '';
			for(var i=0;i<data.length;i++){
				if(i == 0){
					str += '<li><a><i class="fa fa-plus"></i></a><a>'+data[i]['User_name']+' '+data[i]['Content']+'</a><a class="time">'+getLocalTime(data[i]['Review_time'])+'</a></li>';
				}else{
					str += '<li><a><i class="fa fa-pencil"></i></a><a>'+data[i]['User_name']+' '+data[i]['Content']+'</a><a class="time">'+getLocalTime(data[i]['Review_time'])+'</a></li>';
				}
			}
			$('.cyq-titleMain > .titleUl').html(str);

		});
	}
	$('.cyq-titleHead').click(getShare);
	
	//添加分享
	$('#cyq-publish').click(function(){
		var project_id = $('#project_id').val();
		var title = $('#cyq-myTitle').val();
		var text = $('#cyq-myText').val();
		$.get('/TP/Home/Share/shareInsert','title='+title+'&text='+text+'&project_id='+project_id,function(data){
			//alert(data);
			if(data){
				var data = JSON.parse(data);
				for(var i=0;i<data.length;i++){
					user = data[0];
				}
				$("#cyq-shareText").prepend($('<div class="cyq-titleHead" id="data-'+user['Share_id']+'"></div>'));
				$('.cyq-titleHead').eq(0).css('background','#FAFAFA').siblings().css('background','');
				$('.cyq-titleHead').eq(0).prepend($('<div class="cyq-head"><img src="/TP/Public/images/'+user['Face']+'"></div>'));
				$('.cyq-titleHead').eq(0).append($('<div class="cyq-inform"></div>'));
				$('.cyq-inform').eq(0).append($('<a class="cyq-headDate">'+user['User_name']+' 发布于 '+getLocalTime(user['Create_time'])+'</a>'));			
				$('.cyq-inform').eq(0).prepend($('<a class="cyq-headText">'+user['Share_title']+'</a><br/>'));
				$('.cyq-shareMsg > .title').html(user['Share_title']);
				$('.cyq-shareMsg > .article').html(user['Share_text']);
				$('.cyq-titleHead').first().prepend($('<input class="share_id" type="hidden" value="'+user['Share_id']+'"/>'));
				$('.cyq-titleHead').first().prepend($('<input class="user_id" type="hidden" value="'+user['User_id']+'"/>'));
				$('.cyq-titleHead').first().prepend($('<input class="Share_text" type="hidden" value="'+user['Share_text']+'"/>'));
				$('.cyq-titleHead').first().prepend($('<input class="Share_title" type="hidden" value="'+user['Share_title']+'"/>'));
				$('.cyq-titleHead').first().click(getShare);
				$('.cyq-titleHead').first().click();
			}else{
				alert('添加失败！');
			}
		});
	});
	//更新分享
	$('#cyq-update').click(function(){
		$('#cyq-shareList').hide();
		var share_id = $('#sharethisId').val();
		var project_id = $('#project_id').val();
		var user_id = $('#user_id').val();
		var title = $('#cyq-myTitle').val();
		var text = $('#cyq-myText').val();
		$("#data-"+share_id+" > .cyq-inform > a").first().html(title);
		$.get('/TP/Home/Share/shareUpdate','title='+title+'&text='+text+'&project_id='+project_id+'&share_id='+share_id,function(data){
			alert(data);
		});
		return true;
	});
	//删除分享
	$('.cyq-actList > .delete').click(function(){

		$('#cyq-shareList').hide();
		var project_id = $('#project_id').val();
		var user_id = $('#user_id').val();
		var share_id = $('#sharethisId').val();
		$('.cyq-titleHead').remove("#data-"+share_id);
		var title = $('.Share_title').first().val();
		var article = $('.Share_text').first().val();
		$('.cyq-shareMsg > .title').html(title);
		$('.cyq-shareMsg > .article').html(article);

		$.get('/TP/Home/Share/shareDelete','share_id='+share_id+'&project_id='+project_id+'&user_id='+user_id,function(data){
			alert(data);

		});
		$('.cyq-titleHead').first().click();
		return true;
	});
	function getLocalTime(nS) {     
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/(\d+)\/(\d+)\/(\d+)/g, "$1/$2/$3 ");
    } 



});