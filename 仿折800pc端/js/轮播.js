$(function(){
			var i=0;
			var clone=$('.lunbo_banner .img li').first().clone();
			$('.lunbo_banner .img').append(clone);

			//图片li 的长度
			var size=$('.lunbo_banner .img li').size();
                      
              $(".lunbo_banner .img").width(1030*6+"px");
              $(".lunbo_banner").css("overflow","hidden")           
			//圆点hover，改变动画
			$('.lunbo_banner .num li').hover(function(){
				i=$(this).index();
				$('.lunbo_banner .img').stop().animate({left:-1030*i},1);
				$(this).addClass('on').siblings().removeClass('on');
			})

			var t=setInterval(moveL,5000)

			$('.lunbo_banner').hover(function(){
				clearInterval(t)
			},function(){
				t=setInterval(moveL,5000);
			})

			function  moveL(){
				i++;
				// 当移动到最后一张，再移动的时候，回到第一张
				if(i==size){
					$('.lunbo_banner .img').css({'left':'0px'});
					i=1;
				}
				//移动动画
				$('.lunbo_banner .img').stop().animate({left:-1030*i},1);

				//圆点跟随添加样式on
				if(i==size-1){
					$('.lunbo_banner .num li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.lunbo_banner .num li').eq(i).addClass('on').siblings().removeClass('on');
				}
			}
			function moveR(){
				i--;
				// 当移动到第一张，再移动的时候，回到最后一张
				if(i==-1){
					$('.lunbo_banner .img').css('left',-(size-1)*1030);
					i=size-2;
				}
				//移动动画
				$('.lunbo_banner .img').stop().animate({left:-1030*i},1);
				//圆点跟随添加样式on
				$('.lunbo_banner .num li').eq(i).addClass('on').siblings().removeClass('on');
			}
		})
