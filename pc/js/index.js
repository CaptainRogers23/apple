$(function () {
	//导航栏对象
	var nav = $('.nav-wrap');
	//回到顶部
	var topControl = $('#topControl');
	//导航栏相对于网页原点的位置
	var navPos = nav.offset().top;
	//导航栏的高度  一般用outerheight   内容加padding 加border
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function(){
		
		//获得滚动条的位置
		var sTop = $(window).scrollTop();
		
		
		/*超过两百像素显示*/
		if(sTop >= 200) { 
			
			topControl.fadeIn(300);		
			
		} else {
			topControl.fadeOut(300);
		}
		
		//自动给导航栏添加fixed样式
		
		if(sTop >= navPos){
			if(!nav.hasClass('fix')){
				
				nav.addClass('fix');
				//添加站位  保留原来导航栏位置
				$('.banner').css('margin-bottom',navHeight);
			}
			
			
		} else {
			if(nav.hasClass('fix')){
				
				nav.removeClass('fix');
				//取消站位 
				$('.banner').css('margin-bottom',0);
			}
		}
		
		//滚动监听导航自动高亮
		function navActive (target) {
			if(!$(target).hasClass('active')) {
				
				$('.nav-wrap li').removeClass('active');
				
				$(target).addClass('active');
				
			}
	
		}
		//海量正版免费下高亮走起
		var introStart = $('#post-intro').offset().top - navHeight;
		var introEnd = $('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight;
		if (sTop >= introStart && sTop < introEnd){
			if (!$('.intro').hasClass('active')){
				$('.intro').removeClass('active');
			}
			navActive($('.intro'));
		} else {
			if ($('.intro').hasClass('active')){
				$('.intro').removeClass('active');
			}
		}
		//高亮免费下高亮走起
		var usageStart = $('#post-usage').offset().top - navHeight;
		var usageEnd = $('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight;
		if (sTop >= usageStart && sTop < usageEnd){
			if (!$('.usage').hasClass('active')){
				$('.usage').removeClass('active');
			}
			navActive($('.usage'));
		}else {
			if ($('.usage').hasClass('active')){
				$('.usage').removeClass('active');
			}
		}
		//手机瘦身免费下高亮走起
		var choiceStart = $('#choiceness').offset().top - navHeight;
		var choiceEnd = $('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight;
		if (sTop >= choiceStart && sTop < choiceEnd){
			if (!$('.choice').hasClass('active')){
				$('.choice').removeClass('active');
			}
			navActive($('.choice'));
		}else {
			if ($('.choice').hasClass('active')){
				$('.choice').removeClass('active');
			}
		}
	});
	
	//回到顶部的功能
	topControl.click(function () {
		
		$('html,body').animate({scrollTop:0},1000);
		
	});
	$('.nav-wrap a').click(function (){
		//获得板块相对于原点的位置
		var top = $(this.hash).offset().top - navHeight + 7;
		
		$('html,body').animate({scrollTop:top},1000);
		return false;
	});
	
});
