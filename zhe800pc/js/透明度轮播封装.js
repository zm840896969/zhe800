$(function(){
	    		var index=0;
	    	$(".imgbox li").eq(0).css("opacity",1);
	    	$(".numbox li").eq(0).addClass("on")
	    		  function moveL(){
	    		       index++; 	
	    		    if (index==$(".imgbox li").size()) {
	    		  		index=0;
	    		  	}
	    		  	$(".imgbox li").eq(index).stop().animate({opacity:1},500)
	    		  	$(".imgbox li").eq(index).siblings().css("opacity",0)
	    		  	
	    		  	
	    		  	if(index==$(".imgbox li").size()){
					$('.numbox li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.numbox li').eq(index).addClass('on').siblings().removeClass('on');
				}
	    		  	console.log(index);
	    		 }
	    		
	    		function moveR(){
	    			
	    		       index--; 	
	    		    if (index==-1) {
	    		  		index=$(".imgbox li").size()-1;
	    		  	}
	    		  	$(".imgbox li").eq(index).stop().animate({opacity:1},500)
	    		  	$(".imgbox li").eq(index).siblings().css("opacity",0)
	    		  	
	    		  	$('.numbox li').eq(index).addClass('on').siblings().removeClass('on');
	    		  	console.log(index);
	    		 }
	    		
	    	var	t=setInterval(moveL,2000)
	    		
	    		
	    	$('.numbox li').hover(function(){
				index=$(this).index();
				$(".imgbox li").eq(index).stop().animate({opacity:1},500)
	    		$(".imgbox li").eq(index).siblings().css("opacity",0)
				$(this).addClass('on').siblings().removeClass('on');
			})	
	    		
	    $('.banner').hover(function(){
				clearInterval(t)
				
			},function(){
				t=setInterval(moveL,2000);
			})
	    		
	 
	        $('.btn_l').click(function(){
				moveR();
			})

      
			// 向右点击按钮
			$('.btn_r').click(function() {
				moveL();
			});
	 
	   })
	    	