$(function() {

	$(".sidebar").height($(window).height())
	var timer = setInterval(function() {
		$(".sidebar .tiao").animate({
			top: 6
		}, 500).animate({
			top: -6
		}, 500)
	}, 1000)
	
	
	
	
	

	$(".sidebar li:not(:eq(5))").each(function() {

		var msrc = "0" + $(this).index()
		var isrc = $(this).find("img").attr("src")
		$(this).hover(function() {

			$(this).children().children("img").attr("src", 'img/images/side(' + msrc + ").jpg")
			$(this).find("div").show()
			$(this).css("background", "#c7000b")

		}, function() {
			$(this).css("background", "#000000")
			$(this).children().children("img").attr("src", isrc)
			$(this).find("div").hide()
		})

	})






	$(".sidebar li:eq(5)").hover(function() {
		$(this).find("div").show()
		$(this).css("background", "#c7000b")

	}, function() {
		$(this).css("background", "#000000")
		$(this).find("div").hide()
	})





	$(window).scroll(function() {
		console.log($(this).scrollTop())
		if($(this).scrollTop() > 300) {
			$(".sidebar_lastli").show().click(function() {
				$("body,html").stop().animate({
					scrollTop: 0
				}, 500)

			})

		} else {
			$(".sidebar_lastli").hide()
		}

	})

  $(window).scroll(function(){
  	  if($(this).scrollTop()>500){
  	
  	 $(".dingbu").show();
  }else{
  	 $(".dingbu").hide();
  	}
  })




	$(".header ul .phone").hover(function() {
		$(this).css("background", "white")
		$(this).find("div").show()
	}, function() {
		$(this).find("div").hide()
		$(this).css("background", "#fafafa")
	})





	$(".logo ._search .txt").focus(function() {
		$(this).val(" ");
		$(".logo ._search .history").show()

	}).blur(function() {
		$(".logo ._search .history").hide()

	})
	
	





	$(".nav ul li a").click(function() {

		$(this).addClass("active").parent().siblings().children().removeClass("active")
	})
	
	
	



	$(".nav ul li a:not(.active)").hover(function() {
		$(this).css("color", "red")

	}, function() {

		$(this).css("color", "#696969")
	})
	
	
	
	
	
	
    $(".nav ._register").hover(function() {
		$(".xienahover").show()
        
	}, function() {
		$(".xienahover").hide()
	})
	
	
	
	    
   $("._classify li:not(:gt(7))").hover(function(){
   	        
   	       var i=$(this).index()+1;
   	       var self=$(this); 
   	      
   	       $(this).find("div").show();
   	       $(this).siblings().find("div").hide();
 	 
 	    	
 	    
 	  if (this.index) {
 	  	
 	  }
   			$.ajax({
				type: "GET",

				url: "json/merchandise"+i+".json",

			  success: function(res) {
			  	
           self.find("._top h4").append("<a href='' class='red'>"+res[0].type+"</a>"); 
             for (i=0;i<res[0].claess.length;i++) {
             	self.find("._top p").append("<a href='#'>"+res[0].claess[i]+"</a>")  
             };
             
            self.find("._bottom h4").append("<a href='#'>"+res[1].type+"</a>");
                          
                for (i=0;i<res[1].claess.length;i++) {
             	 self.find("._bottom p").append("<a href='#' class='red'>"+res[1].claess[i]+"</a>")  
             } 
             
			self.find(".a1").append('<img src="img/images/'+res[2].src[0]+'"/>')
			    for (i=1;i<5;i++) {
			    	self.find(".a2").append('<img src="img/images/'+res[2].src[i]+'"/>')
			    }
			
			self.find(".a3").html(" ").append('<img src="img/images/'+res[2].src[5]+'"/>')
			
		
			
    $('p a:contains("床")').css("color","red") 	
      $('p a:contains("装")').css("color","red")  
	   $('p a:contains("童")').css("color","red")     
		$('p a:contains("牛")').css("color","red")    
		  $('p a:contains("衣")').css("color","red")
		   $('p a:contains("干")').css("color","red")
		     $('p a:contains("机")').css("color","red")
		   $('p a:contains("男")').css("color","red")
		   $('p a:contains("女")').css("color","red")
		   } 
   	                
         })
   			 
   			 
      
    },function(){
    	$(this).find("div").hide();
    	 $(this).find("._top h4").empty();
    	 $(this).find("._top p").empty();
    	  $(this).find("._bottom p").empty();
    	   $(this).find("._bottom h4").empty();
    	    $(this).find(".a1").empty();
    	     $(this).find(".a2").empty();
                $(this).find(".a3").empty();


    	    
    	  
    	 
    })
      
      
      
     var t=setInterval(function(){
     	
    
         var i=0   
   
    	 var timer=setInterval(function(){
    	$("._register .doudong").animate({left:-38},50).animate({left:-32},50)
    	     i++;
    	      if (i==4) {
    	clearInterval(timer);
    
    	}   
    },100)
    	    var j=0;
    	  var time=setInterval(function(){
    	  	
          $("._register span").eq(j++).delay(300).animate({fontSize:22},300).animate({fontSize:15},1)
          	    
          	   
    	  },1000)
    	   
   },7000)  




 })



