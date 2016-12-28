    $(document).ready(function() {
        $(".wxcoslu,.wxcosld,.wxcosru,.wxcosrd").mouseover(function(){
            $(this).css("opacity","0.3");    
        }).mouseout(function(){
            $(this).css("opacity","1");
        }) 

        $(".wxcosPos img").mouseover(function(){
             $(this).next().css("display","block");                       //显示蒙版
             $(this).next().next().css("display","block");                //显示p
             $(".wxcoslimgMB").mouseover(function(){        //防止晃动
                $(this).css("display","block");
                $(this).next().css("display","block");
                    $(".wxcosPos > p").mouseover(function(){
                        $(this).css("display","block");
                        $(this).prev().css("display","block");
                    })
            }).mouseout(function(){
                $(this).css("display","none");
                $(this).next().css("display","none");
            })
        }).mouseout(function(){
             $(this).next().css("display","none");
             $(this).next().next().css("display","none");
        })
        // 蒙板效果设置完毕
        // 上下滚动
        var page1 = 1;
        var page2 = 1;
        var conheight = 280;
        var locker = 1;
        $(".wxcoslu").click(function(){
                                     if(locker){locker = 0; 
                                     if( page1%2 == 0 ) {
                                         $(this).next().children().first().animate({top:'-=' + conheight+'px'},'slow',function(){
                                            $('.con_list_left').css("top","-560px");
                                            page1++;
                                            locker = 1;
                                          });                                        
                                     }else{
                                         $(this).next().children().first().animate({top:'-=' + conheight+'px'},'slow');  
                                         page1++;
                                         locker = 1;
                                     }
                                    }});
        
       $(".wxcosld").click(function() {
                         if(locker){locker = 0
                         if( page1%2 == 0 ) {
                             $(this).prev().children().first().animate({top:'+=' + conheight},'slow',function(){
                                $('.con_list_left').css("top","-560px");
                                page1--;
                                locker = 1;
                              });                                        
                         }else{
                             $(this).prev().children().first().animate({top:'+=' + conheight},'slow');  
                             page1--;
                             locker = 1;
                         }
                         }});
       $(".wxcosrd").click(function() {
                         if(locker){locker = 0
                         if( page2%2 == 0 ) {
                             $(this).prev().children().first().animate({top:'+=' + conheight},'slow',function(){
                                $('.con_list_right').css("top","-560px");
                                page2--;
                                locker = 1;
                              });                                        
                         }else{
                             $(this).prev().children().first().animate({top:'+=' + conheight},'slow');  
                             page2--;
                             locker = 1;
                         }
                         }});
        $(".wxcosru").click(function(){
                                     if(locker){locker = 0; 
                                     if( page2%2 == 0 ) {
                                         $(this).next().children().first().animate({top:'-=' + conheight+'px'},'slow',function(){
                                            $('.con_list_right').css("top","-560px");
                                            page2++;
                                            locker = 1;
                                          });                                        
                                     }else{
                                         $(this).next().children().first().animate({top:'-=' + conheight+'px'},'slow');  
                                         page2++;
                                         locker = 1;
                                     }
                                    }});
          


        

    })