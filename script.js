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
  });

  $("#inquirySubmit").on("click", function(){
    $("#inquiryLoading").show();
    if($("#exampleInputEmail1").val() === ""){
      $("#inquiryLoading").hide();
      $("#inquiryResult").text("メールアドレスを入力して下さい");
      $("#inquiryResult").show();
    }else{
      $.ajax({
        type : 'POST',
        url : 'https://aquarium-fish-programing.herokuapp.com/inquiry',
        dataType : 'application/json',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        },
        xhrFields: {
          withCredentials: true
        },
        success : function(data, status, xhr){
          let message = data["message"];
          $("#inquiryLoading").hide();
          $("#inquiryResult").text(message);
          $("#inquiryResult").show();
        },
        error : function(){
          $("#inquiryLoading").hide();
          $("#inquiryResult").text("失敗しました");
          $("#inquiryResult").show();
        }
      })
    }
  });
});
