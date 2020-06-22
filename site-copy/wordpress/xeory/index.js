$("#menu-btn").click(function(){
	var $headerMenu = $(".sp-header-menu-wrap");
	if($headerMenu.is(":hidden")){
		$headerMenu.slideDown();
	}else{
		$headerMenu.slideUp();
	}
})