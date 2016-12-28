$(document).ready(function() {
	//放大效果
	$(".imgOH").mouseover(function(){		
		$(this).children().attr({"width":"288px","height":"188px"}).css({"top":"-8px","left":"-8px"});	
	}).mouseout(function(){
		$(this).children().attr({"width":"271px","height":"171px"}).css({"top":"0","left":"0"});	
	})
	//放大效果结束
	//轮播图开始
	var rollheight = 100;
	var locker = 1;
    var counterA = [1,2,3,4];
    
    $(".overHideUp").click(function(){
    	if(locker)
          {  locker = 0;
			  counterA.unshift(counterA[3]);
			  counterA.pop();
    	$(".roll_list").children(":first").children().attr("src",'img/huayiS'+ counterA[0] +'.jpg');
         $(".roll_list").animate({top:'+=' + rollheight+'px'},'slow',function(){
         	$(".roll_list").children().eq(4).remove();              //移掉出界的
         	$(".roll_list").prepend("<li><img></li>");   //加入新的缓冲元素
         	$(".roll_list").css("top","-100px");         //复位
         	 locker = 1;         	 
         });
        }
    })
    $(".overHideDown").click(function(){
    	if(locker)
          {  locker = 0;
			  counterA.push(counterA[0]);
			  counterA.shift();
			  $(".roll_list").children(":last").children().attr("src",'img/huayiS'+ counterA[3] +'.jpg');
         $(".roll_list").animate({top:'-=' + rollheight+'px'},'slow',function(){
         	$(".roll_list").children().eq(1).remove();             
         	$(".roll_list").append("<li><img></li>");   
         	$(".roll_list").css("top","-100px"); 
         	 locker = 1;
     	    });
        }
    })
	//轮播图结束
	//鼠标移入大图显示
	$(".roll_list").on("mouseover", 'li',function(){
       var wxBigsrc = $(this).children(":first")[0].src;
       $(".wxBigPhoto").attr("src",wxBigsrc); 
       $(".wxBigPhoto").width(870);
       $(".wxBigPhoto").height(565);
	})


})
