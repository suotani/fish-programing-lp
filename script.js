$(function(){
  var imgHeight = $('.top').outerHeight();
  var header = $('header');
  
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight){
      header.removeClass('headerColor-default');
      $("#toTop").hide()
    }else{
      header.addClass('headerColor-default');
      $("#toTop").show();
    }
  });

  $("#toTop").on("click", function(){
    $("body, html").animate({ scrollTop: 0}, 2000);
  })
});
