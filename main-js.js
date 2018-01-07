(function($) {
  $.fn.goTo = function() {
    $('html, body').animate({
        scrollTop: $(this).offset().top + 'px'
    }, 1000);
    return this;
  }
})(jQuery);

$("#drop-down-button-1").click(function(){
  $("#container-2").goTo();
});

$("#drop-down-button-2").click(function(){
  $("#container-3").goTo();
});