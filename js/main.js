  jQuery(document).ready(function($) {
  	$(".post").hover(function() {
  		$(this).find(".read-more").fadeToggle();
  	});


    $('a').tooltip({
    	placement:"top"
    });
  });