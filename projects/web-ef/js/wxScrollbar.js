$(document).ready(function() {
    var content = $(".wxdiv2");
    var box = $(".wxdiv1");
    var scrollbar = $(".wxdiv3");
    var scroll=function(content,box,scrollbar){
        var bigHeight = content.height();   //内容总高度
        var smallHeight = box.height();     //可视区域高度
        var rate = smallHeight/bigHeight;
        var h = Math.floor(rate*smallHeight);//设定滚轮高度
        scrollbar.height(h);


        var offset = box.offset();         //返回box相对于文档的偏移坐标
        var offsetT = offset.top+1;

        scrollbar.mousedown(function(e){            //鼠标按下时
            var divOffsetT = scrollbar.offset().top; //滚轮下移距离
            var tempT = e.pageY-divOffsetT;          //鼠标指针相对于滚轮上边缘距离，

            function move(e){
                var newH = e.pageY-tempT-offsetT;      //滚轮下滑距离与box移动距离之差
                if(newH<0){
                    newH=0;
                }else if(newH>(smallHeight-h)){
                    newH=smallHeight-h;                  //可视区域高度减去滚轮高度
                }
                var rate2 = (newH+h)/smallHeight;
                var contentH = Math.floor(bigHeight*rate2-smallHeight);
                content.css("top",-contentH+"px");    //随着鼠标的移动，同时移动内容
                scrollbar.css("top",newH+"px");                           //和滚动条
            }
            //move函数结束
            $("body").on("mousemove",move);
            $("body").mouseup(function(){     //鼠标抬起时，解除移动
                $("body").off("mousemove",move);
            });
        });//mousedown函数结束
    }    //scroll函数结束
    scroll(content,box,scrollbar);
});
