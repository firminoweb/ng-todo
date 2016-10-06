;(function () {

	// Bug Fix break page
	window.addEventListener("load", function() {
	  document.body.classList.remove("invisible");

	}, false);


	document.addEventListener('DOMContentLoaded', function () {

		var config = {
          viewFactor : 0.15,
          duration   : 800,
          distance   : "0",
          reset: true,
          scale      : 0.5
        };

        var myheader = {
        origin   : "top",
        distance : "40px",
        duration : 1500,
        scale    : 1
      	};

        var fromfooter = {
        origin   : "bottom",
        distance : "40px",
        duration : 1500
      	};


		window.sr = ScrollReveal( config );

		sr.reveal("#myHeader, .display-4", myheader);
		sr.reveal(".fromBottom, #myDesc", fromfooter);
		sr.reveal(".cover-bg", { scale: 2.0, duration: 5000 });

	}, false);


})();