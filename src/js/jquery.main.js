$(document).ready(function(){
	
	// Tabs
		$('[data-action="tab"]').click(function(){			
			// Tab links toggle class
				$(this).closest(".vtabs__list").children("li").removeClass('active');
				$(this).parent().addClass('active');
			// Show tab content
				var tabTarget = $(this).attr('data-target');
				$(tabTarget).fadeIn('slow');
				$(".vtabs__content > div").not($(tabTarget)).fadeOut('slow');
		});
	// Develope
});	