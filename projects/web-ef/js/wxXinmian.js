$(document).ready(function(){
	var locker = 1;
	var conwidth = 1200;


	$('body').on('click', '.xinmiank3-2', function() {
		if(locker){locker=0;
		$(".xinmianconlist").append($(".xinmiancon").clone(true));
		$(".xinmiancon").eq(1).css("left","3000px");
		$(".xinmianconlist").animate({left:'-=' + conwidth+'px'},'slow',function(){
			$(".xinmianconlist").css("left","-1800px");
			$(".xinmiancon").css("left","1800px");
			$(".xinmianconlist").children(":last").remove();
			locker=1;
			});
		}
	});
	$('body').on('click', '.xinmiank3-1', function() {
		if(locker){locker=0;
		$(".xinmianconlist").append($(".xinmiancon").clone(true));
		$(".xinmiancon").eq(1).css("left","600px");
		$(".xinmianconlist").animate({left:'+=' + conwidth+'px'},'slow',function(){
			$(".xinmianconlist").css("left","-1800px");
			$(".xinmiancon").css("left","1800px");
			$(".xinmianconlist").children(":last").remove();
			locker=1;
			});
		}
	});


})