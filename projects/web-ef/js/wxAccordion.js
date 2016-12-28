$(document).ready(function() {
    $('.fuzhuang4').find('.accordion-toggle').mouseover(function(){

      $(this).next().slideDown('fast');

      $(".accordion-content").not($(this).next()).slideUp('fast');

    });
});

