$(document).ready(function() {
	//视频效果
	$(".xingmei2").last().find("p").mouseover(function(){
		$(this).children().first().attr("src","images/划上视频_03.png");
	}).mouseout(function(){
		$(this).children().first().attr("src","images/视频图标_03.png");
	})
	// 视频效果结束
	//放大效果
	$(".imgOHxm").mouseover(function(){		
		$(this).children().attr({"width":"243px","height":"188px"}).css({"top":"-8px","left":"-8px"});	
	}).mouseout(function(){
		$(this).children().attr({"width":"226px","height":"171px"}).css({"top":"0","left":"0"});	
	})
	//放大效果结束
	//镜面效果开始
	
	$(".wxwapper").mouseenter(function(){    //不要用mouseover，否则鼠标穿过子元素也会触发效果

		 $(this).children(":first").animate({left:"290px"},function(){
		 	$(this).css("left","-101px");		 	 
		 });      
 	})	            
    //镜面效果结束

})
	
