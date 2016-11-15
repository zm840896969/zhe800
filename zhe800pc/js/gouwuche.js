

$(function() {
  	

   if(confirm("请先登录")){
   	
        	 
    
    
	for (i = 0; i < 200; i++) {
		if (getCookieWithKey("商品图片" + i) && getCookieWithKey("商品图片" + i) != "0") {

			$("table tbody").append('<tr><td><input type="checkbox"/></td><td class="tupian"><img src="' + getCookieWithKey("商品图片" + i) + '"/></td><td class="jiage">' + getCookieWithKey("商品价格" + i) + '</td><td> <div id="" class="jijian">' +
				'<span class="jian"> - </span><em>1</em><span class="jia"> + </span>' +
				'</div></td><td class="zongjia">' + getCookieWithKey("商品价格" + i) + '</td><td><i>删除</i></td></tr>')

		}

	}
	
//	
//	   idate.setDate(idate.getDate()+7);
//     numbe=$("tbody tr").size(); 
//       console.log(numbe)
//     setCookie("shuliang",numbe,idate);
	
	
	
	
	
	

	if ($("tbody td").html()) {

		$("table").show();
		$(".kong").hide();
	} else {

		$("table").hide();
		$(".kong").show();
	}

                
	$("table tbody td i").click(function() {
		 
		var a = $(this).parents("tr").find(".tupian img").attr("src")
		var arr = [];

		for (j = 0; j < a.length; j++) {
			if (!isNaN(a[j]) && a[j] != " ") {
				arr.push(a[j]);
			}
			var str = arr.join();

			n = str.replace(/,/g, "")
			num = parseInt(n) - 1;

		}

		removeCookie("商品图片" + num);
		console.log("商品图片" + num)

		$(this).parents("tr").remove();

		if ($("tbody td").html()) {

			$("table").show();
			$(".kong").hide();
		} else {

			$("table").hide();
			$(".kong").show();
		}
		
		
	
       
//    var idate=new Date();             	  
//  
//   idate.setDate(idate.getDate()+7);
//  numbe=$("tbody tr").size(); 
//   setCookie("shuliang",numbe,idate); 
//   console.log(numbe)
      
      })
	 
	
	
	
	
     
	var i = 1;
	$(".jia").click(function() {

		i++;
		$(this).siblings("em").text(i);
		if (i >= 9) {
			$(this).siblings("em").text(9);
		}

		var x = $(this).parents("tr").find(".jiage").text().split("");
		x.pop();
		x.shift();
		str = x.join();

		mstr = str.replace(/,/g, '');
		rmb = parseInt(mstr);
		qian = rmb * $(this).siblings("em").text()
		console.log(qian)
		$(this).parents("tr").find(".zongjia").text(qian)
	})

	$(".jian").click(function() {
		i--;
		$(this).siblings("em").text(i);
		if (i <= 1) {
			$(this).siblings("em").text(1);

		}

		var x = $(this).parents("tr").find(".jiage").text().split("");
		x.pop();
		x.shift();
		str = x.join();

		mstr = str.replace(/,/g, '');
		rmb = parseInt(mstr);
		qian = rmb * $(this).siblings("em").text()
		console.log(qian)

		$(this).parents("tr").find(".zongjia").text(qian)

	})

            
        $(".jiesuan").click(function(){
        	var marr=[];
          $(this).parents("tfoot").css("opacity","1");
        	 $(".zongjia").each(function(){
        	 	     
        	 	marr.push($(this).text());
        	 	
        	 	
        	 })
        	 var  sum=0;
             for (i=0;i<marr.length;i++) {
             	b= parseInt(marr[i])
             	  sum=sum+b;
             	  
             	
             }      
                 console.log(sum)
       
        	    $(".zong").text(sum)
        })

 }

    
})