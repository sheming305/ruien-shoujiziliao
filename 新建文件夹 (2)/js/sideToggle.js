(function($){
  $.fn.sideToggle = function(moving) {
    return this.click(function(){
      var left = parseInt($(moving).css('left'), 10);
      var menuWidth = $(moving).outerWidth();
      if (left === 0) {
        $(moving).animate({'left' : -menuWidth
                          });
      } else {
        $(moving).animate({'left' : '0px'});
      }
    });
  }
}(jQuery));


// $('#sideMenu').sideToggle('#sideMenuContainer');

