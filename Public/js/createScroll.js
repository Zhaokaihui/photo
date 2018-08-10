/**
 * 生成侧边滚动条
 * @param  {string} tagName  需要滚动条的标签的名称（id值或class值）
 * @param  {string} typeName 标签的名称是什么类型的（id或class），默认class
 * @return {[type]}          [description]
 */
/*
html代码格式
<div id="navbarLeft">
	<!-- 需要滚动条的标签 -->
	<ul class="leftMenuModule">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<!-- 滚动条 -->
	<div class="scrollArea">
		<div class="scrollBar"></div>
	</div>
</div>

css属性
.scrollArea{display: none; width: 6px; background: #343434; height: 300px; position: absolute; right: 0; top: 0; border-radius: 2px;}
.scrollArea .scrollBar{width: 6px; background: #5A5A5A; height: 200px; position: absolute; top: 0; border-radius: 2px;}

初始化示例
createScorll('leftMenuModule');
 */
function createScorll(tagName, typeName){
	var scorllTagName;
	if(typeName =='class' || !typeName){
		scorllTagName = $('.'+tagName);
	}else{
		scorllTagName = $('#'+tagName);
	}

	scrollCheck(scorllTagName);

	$('.scrollArea .scrollBar').on('mousedown', function(e){
		event.preventDefault();
		var clientY = e.pageY;
		var tagCss = scorllTagName.get(0).currentStyle || document.defaultView.getComputedStyle(scorllTagName.get(0));
		var tagMarginTop = parseInt(tagCss.marginTop);
		var scrollBar = scorllTagName.parent().children('.scrollArea').children('.scrollBar');
		var scrollBarTop = parseInt(scrollBar.css('margin-top'));
		$(window).on('mousemove', function(e){
			event.preventDefault();
			var offsetY = e.pageY - clientY;
			var diff = scorllTagName.parent().height() - scrollBar.height();
			var scrollBarMarginTop = scrollBarTop + offsetY;
			scrollBarMarginTop = scrollBarMarginTop>0? scrollBarMarginTop:0;
			scrollBarMarginTop = scrollBarMarginTop<diff?scrollBarMarginTop:diff;

			var marginTop = 0 - (scrollBarMarginTop / scorllTagName.parent().height()) * scorllTagName.height();
			diff = 0 - (scorllTagName.height() - scorllTagName.parent().height());
			marginTop = marginTop>0? 0:marginTop;
			marginTop = marginTop<diff? diff:marginTop;

			scrollBar.css('margin-top',  scrollBarMarginTop + 'px');
			scorllTagName.css('margin-top', marginTop + 'px');
		});
	});

	$(window).on('mouseup', function(){
		event.preventDefault();
		$(window).unbind('mousemove');
	});

	$(window).resize(function(e){
		event.preventDefault();
		scrollCheck(scorllTagName);
	});

	// 改变显示区域大小的时候执行的方法
	function scrollCheck(tag){
		var parent;
		
		parent = tag.parent();

		// console.log(parent.height());
		if(parent.height() < tag.height()){
			parent.children('.scrollArea').css('display', 'block');
		}else{
			parent.children('.scrollArea').css('display', 'none');
			return;
		}

		var diff = tag.height() - parent.height();
		// console.log(diff);
		var scrollArea = parent.children('.scrollArea');
		var scrollBar = scrollArea.children('.scrollBar');

		var scrollBarHeight = parent.height() - (diff / tag.height() * parent.height());
		// var tagCss = tag.get(0).currentStyle || document.defaultView.getComputedStyle(tag.get(0));
		// var scrollBarTop = 0 - (parseInt(tagCss.marginTop) / tag.height() * parent.height());

		scrollArea.css('height', parent.height());

		scrollBar.css({
			height: scrollBarHeight + 'px',
			'margin-top': 0
			// 'margin-top': scrollBarTop + 'px'
		});
		tag.css({
			'margin-top': 0
		});

	}
}