$(document).ready(function(){
	
	// Tabs
		$('[data-action="tab"]').click(function(){			
			// Tab links toggle class
				$(this).closest(".tabs__list").children("li").removeClass('active');
				$(this).parent().addClass('active');
			// Show tab content
				var tabTarget = $(this).attr('data-target');
				$(tabTarget).fadeIn(0);
				$(".tabs__content > div").not($(tabTarget)).fadeOut(0);
		});
	// Develope
	function initProgrammCarousel(){
		if($(window).width() < 768){
			$("#programm-content").owlCarousel({
				items: 1,
				autoHeight: true,
				nav: true,
				navText: ["←", "→"]
			});
		}
	}

	initProgrammCarousel();
});	