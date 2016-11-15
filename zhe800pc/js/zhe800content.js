$(function() {
	$.ajax({
		type: "GET",
		url: "json/pinpai_hot.json",

		success: function(res) {

			for(i = 0; i < res.imgbox.length; i++) {
				//				console.log(res.imgbox[i].src)
				var mImg = $('<li><a href=""><img src="img/' + res.imgbox[i].src + '"/></a></li>')

				$("._hotimgbox").append(mImg)
			}
			for(j = 0; j < res.imgboxtwo.length; j++) {
				//				console.log(res.imgboxtwo[j].src + '/////')
				var mImg2 = $('<li><a href=""><img src="img/imges0/' + res.imgboxtwo[j].src + '"/></a></li>')

				$("._hotimgboxtwo").append(mImg2)
			}

		}
	})

	var t = new Date();

	var mytime = t.getHours()
	mytime = mytime + 1;

	if(mytime > 0 && mytime <= 8) {
		$(".buying_time a").first().addClass("active3").siblings().removeClass("active3")
	} else if(mytime > 8 && mytime <= 9) {
		$(".buying_time a").eq(1).addClass("active3").siblings().removeClass("active3")
	} else if(mytime > 9 && mytime <= 12) {
		$(".buying_time a").eq(2).addClass("active3").siblings().removeClass("active3")
	} else if(mytime > 12 && mytime <= 15) {
		$(".buying_time a").eq(3).addClass("active3").siblings().removeClass("active3")
	} else if(mytime > 15 && mytime <= 18) {
		$(".buying_time a").eq(4).addClass("active3").siblings().removeClass("active3")
	} else if(mytime > 18 && mytime <= 20) {
		$(".buying_time a").eq(5).addClass("active3").siblings().removeClass("active3")
	} else if(mytime > 20 && mytime <= 24) {
		$(".buying_time a").eq(6).addClass("active3").siblings().removeClass("active3")
	}

	$.ajax({
		type: "GET",
		url: "json/limited_buying.json",
		success: function(res) {

			for(i = 0; i < res.buyingimg.length; i++) {
				
				var img = $('<a href=""><li> <dl> <dt><div>' + res.buyingimg[i].surplus + '</div><img src="img/imges0/' + res.buyingimg[i].src + '"/></dt> <dd>' + res.buyingcaption[i].buyingname + '<p>' + res.buyingprice[i].price + '</p></dd> </dl></li></a>')

				$("._buying_imgbox ul").append(img)

			}

			$("._buying_imgbox ul a").hover(function() {
				$(this).find("div").stop().animate({
					bottom: 0
				}, 400)

			}, function() {

				$(this).find("div").stop().animate({
					bottom: -25
				}, 400)
			})

			var ele = $("._buying_imgbox li:lt(6)").clone();

			$("._buying_imgbox ul").append(ele);

			var isize = $("._buying_imgbox ul li").size();

			var iWidth = $("._buying_imgbox ul li:first").width();

			myWidth = iWidth * isize + 100;

			$("._buying_imgbox ul").width(myWidth + "px")

			var size = Math.ceil(isize / 6)
			console.log(size)

			$('.btn_l').click(function() {
				moveL();
			})

			// 向右点击按钮
			$('.btn_r').click(function() {
				moveR();
			});

			var time = setInterval(moveL, 5000);

			$("._buying_imgbox ul").hover(function() {

				clearInterval(time)
			}, function() {
				time = setInterval(moveL, 5000);
			})
			$(".btn").hover(function() {

				clearInterval(time)
			}, function() {
				time = setInterval(moveL, 5000);
			})

			var i = 0;

			function moveL() {
				i++;
				// 当移动到最后一张，再移动的时候，回到第一张
				if(i == size) {
					$('._buying_imgbox ul').css({
						'left': '0px'
					});
					i = 1;
				}
				//移动动画
				$('._buying_imgbox ul').stop().animate({
					left: -1190 * i
				}, 1000);

			}

			function moveR() {
				i--;
				// 当移动到第一张，再移动的时候，回到最后一张
				if(i == -1) {
					$('._buying_imgbox ul').css('left', -(size - 1) * 1190);
					i = size - 2;
				}
				//移动动画
				$('._buying_imgbox ul').stop().animate({
					left: -1190 * i
				}, 1000);

			}

		}

	})

                  

	$.ajax({
		type: "get",
		url: "json/groom.json",
		success: function(res) {
			for(i = 0; i < res.length; i++) {
				console.log(res.length)
				var img = $('<li><a href=""><img src="img/image2/' + res[i].src + '"/></a></li>')
				$(".groom_imgbox").append(img);

			}
		}
	})

   
	$.ajax({
		type: "get",
		url: "json/goods.json",
		success: function(res) {
          for(i = 0; i < res.explain.length; i++) {

				var ele = $('<li>' +
					'<div class="gouwuche"><a>包邮</a><a>返积分</a><a>退货补贴优惠券 </a><a class="jiaru">加入购物车</a></div>' +
					'<dl><dt><a href=""><img src="img/goodsimg/' + res.goods_img[i].src + '"/></a></dt><dd><p><a href="">' + res.explain[i].designation + '</a><span>' + res.remaining_time[i].time + '</span></p><h5><a href="" class="jiage">' +
					res.commodity_price[i].price + '</a><span>收藏品牌</span></h5></dd></dl></li>')

				$(".updateimgbox").append(ele);
			}
                   
                  
            
                  var numbe=0;  
                    var imgArr=[];
                    var jiageArr=[];             
               $(".updateimgbox .jiaru").click(function(){
               	  
            
            numbe++;
                  
               	      
               	     var x=$(this).closest("li")
               	      var index=x.index();
               	     var  z=x.find(".jiage");
//             	          console.log(z.text())
               	          y=x.find("img");
//             	        imgArr.push(y.attr("src"))  
//             	        jiageArr.push(z.text())
               	     
               	       
                          var idate=new Date();             	  
               	        idate.setDate(idate.getDate()+7);
              
            
             	setCookie("商品图片"+index,y.attr("src"),idate)
                 setCookie("商品价格"+index,z.text(),idate)
            
//                 setCookie("shuliang",numbe,idate)
//        	       len=getCookieWithKey("shuliang");
      
                    $(".cart_num").html(numbe);
//           	       
//                     len=getCookieWithKey("shuliang");
//           
//        	        $(".cart_num").html(len);
                    
             })
                   
         
                   
               
              
              
               
                   
        }
	});

	$(".updateimgbox li").css("margin-left", "10px")


})