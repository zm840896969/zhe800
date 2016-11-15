$(function(){
	var mindex=0;
	var ele=$('.friendly_link ul li').first().clone()
	$('.friendly_link ul').append(ele)
	var timer1=setInterval(function(){
		mindex++;
		
        if (mindex==4) {
        	
        	$(".friendly_link ul").css("top","0px");
        	mindex=1;
        }
        $(".friendly_link ul").stop().animate({top:-38*mindex},1000)
	},2000)

	
	$('.friendly_link ul').hover(function(){
		
		clearInterval(timer1);
	},function(){
		
		 timer1=setInterval(function(){
		mindex++;
		
        if (mindex==4) {
        	
        	$(".friendly_link ul").css("top","0px");
        	mindex=1;
        }
        $(".friendly_link ul").stop().animate({top:-38*mindex},1000)
	},2000)
		
	})
	
	
	
})