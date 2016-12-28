$(document).ready(function() {
    var conheight = 760;
    var locker = 1;
    var counter = 0;
    $(".bfleft").click(function(){
                                 if(locker){locker = 0;
                             		 counter++; 
                                     $(this).parent().children(":first").animate({left:'-=' + conheight+'px'},'slow',function(){
                                     	toggleText();
                                        $('.bfcon').css("left","-760px");                                        
                                        locker = 1;
                                      });                                        
                                }});
    $(".bfright").click(function(){
                                 if(locker){locker = 0; 
                                 	 counter++;
                                     $(this).parent().children(":first").animate({left:'+=' + conheight+'px'},'slow',function(){
                                     	toggleText();
                                        $('.bfcon').css("left","-760px");                                        
                                        locker = 1;
                                      });                                        
                                }});

    function toggleText1(){       
       $(".bfcon .bf1 .beifu3-1 span").text("精英老师");
       $(".bfcon .bf2 .beifu3-1 span").text("优秀学生");
       $(".bfcon .bf3 .beifu3-1 span").text("精英老师");
    }
    function toggleText2(){       
       $(".bfcon .bf1 .beifu3-1 span").text("优秀学生");
       $(".bfcon .bf2 .beifu3-1 span").text("精英老师");
       $(".bfcon .bf3 .beifu3-1 span").text("优秀学生");
    }
    function toggleText(){
    	if(counter%2==0){
            toggleText2();
    	}
    	else{
            toggleText1();
    	}
    }
//横移效果结束    
//鼠标移上去放大效果
    $(".beifu4-2 > div").mouseover(function(){
    	$(this).children(":first").css({width:"28px",height:"24px"});
    	$(this).children(":last").css({"font-size":14});
    }).mouseout(function(){
    	$(this).children(":first").css({width:"24px",height:"20px"});
    	$(this).children(":last").css({"font-size":12});    	
     })
})