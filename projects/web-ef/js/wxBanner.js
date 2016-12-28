    $(document).ready(function() {
        $(".rBtn,.lBtn").mouseover(function(){
            $(this).css("opacity","0.3").css("transform","scaleY(1.5)");    
        }).mouseout(function(){
            $(this).css("opacity","1").css("transform","scaleY(1)");
        })  
        var wxi = 1;
        var j = 0;
            $(".rBtn").click(function(){
            if(wxi){
                wxi = 0;
                j++;
                var i = j%3;            
            $(".wxbanner").css("background-image","url( img/banner_" + (i+1) + ".jpg   )");
            $(".wxchildDiv > .wxleftup").animate({height:"0px",top:"241px"},2000);       //下移
            $(".wxchildDiv > .wxleftdown").animate({width:"0px",left:"601px"},2000);     //右移
            $(".wxchildDiv > .wxrightup").animate({width:"0px"},2000);                   //左移 
            $(".wxchildDiv > .wxrightdown").animate({height:"0px"},                      //上移 
            2000,function(){
                    $(".wxchildDiv > div").css("background-image","url()");
                    $(".wxchildDiv > .wxleftup").css({"height":"241px","top":"0px"});    
                    $(".wxchildDiv > .wxleftdown").css({"width":"600px","left":"0px"});  
                    $(".wxchildDiv > .wxrightup").css({"width":"600px","left":"0px"});   
                    $(".wxchildDiv > .wxrightdown").css({"height":"241px","top":"0px"}); 
                    $(".wxchildDiv > div").css("background-image","url(img/banner_" + (i+1) + ".jpg)");
                    $(".wxbanner").css("background-image","url()");
                });
            setTimeout(function(){
                wxi = 1;
                },2100);
            }
        });
            $(".lBtn").click(function(){
            if(wxi){
                wxi = 0;
                j=j+2;
                var i = j%3;            
            $(".wxbanner").css("background-image","url( img/banner_" + (i+1) + ".jpg   )");
            $(".wxchildDiv > .wxleftup").animate({width:"0px",left:"601px"},2000);     //右移
            $(".wxchildDiv > .wxleftdown").animate({height:"0px"},2000);               //上移
            $(".wxchildDiv > .wxrightup").animate({height:"0px",top:"241px"},2000);    //下移
            $(".wxchildDiv > .wxrightdown").animate({width:"0px"},                     //左移
            2000,function(){
                    $(".wxchildDiv > div").css("background-image","url()");
                    $(".wxchildDiv > .wxleftup").css({"width":"600px","left":"0px"});
                    $(".wxchildDiv > .wxleftdown").css({"height":"241px","top":"0px"});
                    $(".wxchildDiv > .wxrightup").css({"height":"241px","top":"0px"});
                    $(".wxchildDiv > .wxrightdown").css({"width":"600px","left":"0px"});
                    $(".wxchildDiv > div").css("background-image","url(img/banner_" + (i+1) + ".jpg)");
                    $(".wxbanner").css("background-image","url()");
                });
            setTimeout(function(){
                wxi = 1;
                },2100);
            }
        });         
    })                      
