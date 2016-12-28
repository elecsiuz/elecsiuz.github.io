$(document).ready(function() {

            $(window).scroll(function() {

                var top = $(window).scrollTop()+120;

                $("#xuanfu").css({ top: top + "px" });

            });

});
