$(".default-ul-hide").hover(
  function(){
    $(this).find(".dropdown-menu").show();
  },

  function(){
    $(this).find(".dropdown-menu").hide();
  },

);

$("#search-btn").click(function(){
  $(this).hide();
  $(".search-form form").show();
  $(".search-form input").focus();
})

$(".search-form input").focusout(function(){
  $(".search-form form").show();
  $(".search-form form").hide();
  $("#search-btn").show();
});

$(".nav-toggle-btn").click(function(){
  $(".header-main").toggleClass("header-visible");
  $(".nav-btn-wrap").toggleClass("active");
  $("body").toggleClass("fixed");
});