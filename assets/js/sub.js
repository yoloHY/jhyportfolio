$(document).ready(function() {

	var isClick = false;
	$(".btn_menu").click(function(){
		if(!isClick){
			$(".btn_menu").addClass("active");
			$(".hidden_menu").addClass("show");
			$(".hidden_menu h1").click(function(){
				$(".btn_menu").removeClass("active");
				$(".hidden_menu").removeClass("show");
				isClick = false;
			});
			isClick = true;
		} else {
			$(".btn_menu").removeClass("active");
			$(".hidden_menu").removeClass("show");
			isClick = false;
		}
	});
	
	//hidden menu
	$(".hidden_menu li").on("mouseover", function(){
		setTimeout(function(){
			$(this).addClass("active");
		});
		$(this).find(".mlnb").addClass("active");
	});
	
	$(this).on("mouseout", function(){
		setTimeout(function(){
			$(this).find(".mlnb").removeClass("active");
		});
		$(this).removeClass("active");
	});

	  


});