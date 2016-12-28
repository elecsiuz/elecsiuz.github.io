$(document).ready(function() {
    var content = $(".wxdiv2");
    var box = $(".wxdiv1");
    var scrollbar = $(".wxdiv3");
    var scroll=function(content,box,scrollbar){
        var bigHeight = content.height();   //�����ܸ߶�
        var smallHeight = box.height();     //��������߶�
        var rate = smallHeight/bigHeight;
        var h = Math.floor(rate*smallHeight);//�趨���ָ߶�
        scrollbar.height(h);


        var offset = box.offset();         //����box������ĵ���ƫ������
        var offsetT = offset.top+1;

        scrollbar.mousedown(function(e){            //��갴��ʱ
            var divOffsetT = scrollbar.offset().top; //�������ƾ���
            var tempT = e.pageY-divOffsetT;          //���ָ������ڹ����ϱ�Ե���룬

            function move(e){
                var newH = e.pageY-tempT-offsetT;      //�����»�������box�ƶ�����֮��
                if(newH<0){
                    newH=0;
                }else if(newH>(smallHeight-h)){
                    newH=smallHeight-h;                  //��������߶ȼ�ȥ���ָ߶�
                }
                var rate2 = (newH+h)/smallHeight;
                var contentH = Math.floor(bigHeight*rate2-smallHeight);
                content.css("top",-contentH+"px");    //���������ƶ���ͬʱ�ƶ�����
                scrollbar.css("top",newH+"px");                           //�͹�����
            }
            //move��������
            $("body").on("mousemove",move);
            $("body").mouseup(function(){     //���̧��ʱ������ƶ�
                $("body").off("mousemove",move);
            });
        });//mousedown��������
    }    //scroll��������
    scroll(content,box,scrollbar);
});
