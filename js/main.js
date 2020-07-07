$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	var $itSkills 	= $('#itSkills');
	var $projectManager 	= $('#projectManager');
	var $contactMe 	= $('#contactMe');
    var $hellologo = $('#helloworld');

    if (location.href.indexOf("index") > 1) {

            $hellologo.show();
    }

    if (location.href.indexOf("skills") > 1) {
        itSkills.show();

    }

    if (location.href.indexOf("projects") > 1) {
        $projectManager.show();

    }

    if (location.href.indexOf("contact") > 1) {
        $contactMe.show();

    }
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  
      $logo.slideDown('slow');
      $hellologo.slideUp('slow');

	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
      $hellologo.slideDown('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 800,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });
