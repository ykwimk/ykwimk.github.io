

$(document).ready(function(){
	
	var btnChk = 0;

	$(".search_btn").click(function(){
		if(btnChk == 0){
			$(".search_bg").fadeIn();
			$(".search_wrap").slideDown();
			btnChk = 1;
		}else{
			$(".search_bg").fadeOut();
			$(".search_wrap").slideUp();
			btnChk = 0;
		}
	});


	var inter = setInterval(function(){
		$(".search_btn").toggleClass("tada");
	}, 1250);

});