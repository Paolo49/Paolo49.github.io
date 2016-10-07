
$(document).ready(function() {

  $("#start").on("click", function(e) {
    e.preventDefault();
	$('html, body').animate({
        scrollTop: $("#get-started-content").offset().top
    }, 600);
});

  $("#tips").on("click", function(e) {
      e.preventDefault();
	$('html, body').animate({
        scrollTop: $("#tips-content").offset().top
    }, 600);
});

   $("#community").on("click", function(e) {
      e.preventDefault();
	$('html, body').animate({
        scrollTop: $("#community-content").offset().top
    }, 600);
});

   $("#faq").on("click", function(e) {
    e.preventDefault();
	$('html, body').animate({
        scrollTop: $("#faq-content").offset().top
    }, 600);
});

});
