/**
 * Created by Administrator on 2016/8/14.
 */
    //顶部导航
    $(function(){
        $(".top5").hover(function(){
            $(this).attr({"src":"img/gongyong_3.jpg","width":"16px","height":"16px"})
        },function(){
            $(this).attr("src","img/gongyong_6.png")
        });
        $(".top4").hover(function(){
            $(this).attr({"src":"img/gongyong_21.png","width":"17px","height":"17px"})
        },function(){
            $(this).attr("src","img/gongyong_7.png")
        });
        $(".top3").hover(function(){
            $(this).attr({"src":"img/gongyong_19.png","width":"18px","height":"18px"})
        },function(){
            $(this).attr("src","img/gongyong_8.jpg")
        });
        $(".top2").hover(function(){
            $(this).attr({"src":"img/gongyong_18.png","width":"21px","height":"18px"})
        },function(){
            $(this).attr("src","img/gongyong_4.png")
        });
        $(".top1").hover(function(){
            $(this).attr({"src":"img/gongyong_16.png","width":"22px","height":"20px"})
        },function(){
            $(this).attr("src","img/gongyong_9.jpg")
        });
    });
    //国职新面孔
    $(".guozhi2 input").click(function(){
        var locker = 1;
        $(this).css({"background-color":"black","color":"white"});
        $(this).siblings().css({"background-color":"white","color":"black"});

        if(locker){
            locker = 0;
        $(".guozhi2-1 img").animate({opacity:"0"},100,function(){
            $(".guozhi2-1 img").animate({opacity:"1"},100,function(){
                locker = 1;
            });
        });
        }
    })
//北服新面孔
$(function(){
    $(".Gtubiao").hover(
        function(){
            $(this).attr("src","img/beifu_left_6.png")
        },
        function(){
            $(this).attr("src","img/guozhi_xinwen_.png")
        }
    )

})
//卢索新面孔
$(function(){
    $(".tubiao1").hover(
        function(){
            $("#lusuo2").fadeIn(1000)
        },
        function(){
            $("#lusuo2").fadeOut(1000)
        }
    )

    $(".tubiao").hover(
        function(){
            $(this).attr("src","img/beifu_left_6.png")
        },
        function(){
            $(this).attr("src","img/guozhi_xinwen_.png")
        }
    )
    $(".lusuo3-2 span").mouseover(function(){
        $(this).css({"background-color":"green","color":"white"});
        $(this).siblings().css({"background-color":"white","color":"black"});
        $(".lusuo3-3").animate({opacity:"0"},100,function(){
            $(".lusuo3-3").animate({opacity:"1"},100);
        });
    })
    $(".lusuo3-2").children(":first").mouseover(function(){
        $(".lusuo3-3").css({"background-color":"pink"});
    })
    $(".lusuo3-2").children(":first").next().mouseover(function(){
        $(".lusuo3-3").css({"background-color":"#5599FF"});
    })
    $(".lusuo3-2").children(":last").mouseover(function(){
        $(".lusuo3-3").css({"background-color":"cyan"});
    })
            
     
})
//AFIA资质认证
$(function(){
    $("#tubiao").hover(
        function(){
            $(this).attr("src","img/beifu_left_6.png")
        },
        function(){
            $(this).attr("src","img/guozhi_xinwen_.png")
        }
    )
    $(".Dtubiao").hover(
        function(){
            $(this).attr("src","img/afia_6.png")
        },
        function(){
            $(this).attr("src","img/afia_5.png")
        }
    )
})
//新面孔名模培训
$(function(){
    $(".xinmiank2-2").hover(function(){
            $(this).css({"background":"#8a8a8a","color":"#E29F4D"});
        $(".xinmiank2-1").css({"display":"block","z-index":"9999999"});
    },function(){
            $(".xinmiank2-1").css("display","none");
            $(this).css({"background-color":"white","color":"black","background":"url('img/peixun_4.jpg') no-repeat 150px"})
        }
    )
    $(".xinmiank2-3").hover(function(){
            $(this).css({"background":"#8a8a8a","color":"#FFFE60"});
            $(".xinmiank2-4").css({"display":"block","z-index":"9999999"});
        },function(){
            $(".xinmiank2-4").css("display","none");
            $(this).css({"background-color":"white","color":"black","background":"url('img/peixun_4.jpg') no-repeat 150px"})
        }
    )
})
//资讯
var ul = document.getElementById('zixun2_ul');
var arr = ['志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚',
    '骏马是跑出来的，强兵是打出来的。',
    '只有登上山顶，才能看到那边的风光。',
    '如果惧怕前面跌宕的山岩，生命就永远只能是死水一潭。',
    '平时没有跑发卫千米，占时就难以进行一百米的冲刺。',
    '梯子的梯阶从来不是用来搁脚的，它只是让人们的脚放上一段时间，以便让别一只脚能够再往上登。',
    '没有激流就称不上勇进，没有山峰则谈不上攀登。',
    '真正的才智是刚毅的志向。 —— 拿破仑',
    '山路曲折盘旋，但毕竟朝着顶峰延伸。',
    '只有创造，才是真正的享受，只有拚搏，才是充实的生活。',
    '敢于向黑暗宣战的人，心里必须充满光明。',
    '种子牢记着雨滴献身的叮嘱，增强了冒尖的勇气。',
    '自然界没有风风雨雨，大地就不会春华秋实。',
    '只会幻想而不行动的人，永远也体会不到收获果实时的喜悦。',
    '勤奋是你生命的密码，能译出你一部壮丽的史诗。',
    '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。'
]
for(var i=0;i<16;i++){
    var li = document.createElement('li');
    var img = document.createElement('img');
    var div = document.createElement('div');
    var p = document.createElement('p');
    div.className = 'div';
    img.src = 'images/'+i+'_03.jpg';
    p.innerHTML = arr[i];
    div.appendChild(p);
    li.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
}

//AFIA资质认证
$(".container").bind("mouseenter mouseleave",function(e) {
    var w = $(this).width();
    var h = $(this).height();
    var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
    var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
    //alert(x);
    var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
    var eventType = e.type;
    if(e.type == 'mouseenter'){
        var tubiao = document.get
        if(direction==0){
            $(this).find('.mask').css({'display':'block','top':-h+'px','left':'0px'}).animate({'top':'0px'});
        }else if(direction==1){
            $(this).find('.mask').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'0px'});
        }else if(direction==2){
            $(this).find('.mask').css({'display':'block','top':h+'px','left':'0px'}).animate({'top':'0px'});
        }else if(direction==3){
            $(this).find('.mask').css({'display':'block','left':-w+'px','top':'0px'}).animate({'left':'0px'});
        }
    }else{
        if(direction==0){
            $(this).find('.mask').animate({'top':-h+'px'});
        }else if(direction==1){
            $(this).find('.mask').animate({'left':w+'px'});
        }else if(direction==2){
            $(this).find('.mask').animate({'top':h+'px'});
        }else if(direction==3){
            $(this).find('.mask').animate({'left':-w+'px'});
        }
    }
});
//