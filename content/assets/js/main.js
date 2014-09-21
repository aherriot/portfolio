function determineIfMenuIsShown() {
	if ($(window).width() <= 768) {	
		$("#wrapper").removeClass("nav-shown");

	}	else {
		$("#wrapper").addClass("nav-shown");
	}
}

$(document).ready(function() {

	determineIfMenuIsShown();

	$("#menu-toggle").click(function(e) {
	      e.preventDefault();
	      
	      $("#wrapper").toggleClass("nav-shown");
	      console.log("toggle clicked");
	});

	$(window).resize(function(){
		determineIfMenuIsShown();
	});

});