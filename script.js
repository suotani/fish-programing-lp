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
    let data = { email: $("#exampleInputEmail1").val() };
    sendInquiry(data)
  });


});

function sendInquiry(data){
  $("#inquiryLoading").show();
  if($("#exampleInputEmail1").val() === ""){
    showMessage("メールアドレスを入力して下さい");
  }else{
    $.ajax({
      type : 'POST',
      url : 'https://aquarium-fish-programing.herokuapp.com/inquiry',
      dataType : 'json',
      mode: 'cors',
      data: data
    })
    .done(function(data){
      console.log(data);
      showMessage(data["message"]);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      showMessage("失敗しました");
    });
  }
}

function showMessage(message){
  $("#inquiryLoading").hide();
  $("#inquiryResult").text(message);
  $("#inquiryResult").show();
}