(function($){
  $.fn.sideToggle = function(options) {


    var settings = $.extend({
      moving : null, // which object to toggle?
      direction : null // toggle from this side of the window
    }, options);


    return this.click(function(){

      var thisDir = {};

      var moveThis = settings.moving;
      var dirPos = parseInt($(moveThis).css(settings.direction), 10);
      var menuWidth = $(moveThis).outerWidth();

      if (isNaN(dirPos)) {
        console.log("Please define the object's position in the css.");
      }

      if (dirPos === 0) {
        thisDir[settings.direction] = -menuWidth;
        $(moveThis).animate(thisDir);
      } else {
        thisDir[settings.direction] = 0;
        $(moveThis).animate(thisDir);
      }
    });
  }
}(jQuery));



 $(document).bind('click',function(e){
     var e = e || window.event; //浏览器兼容性
      var elem = e.target || e.srcElement;
      while (elem) { //循环判断至根节点，防止点击的是div子元素
           if (elem.id && elem.id=='sideMenu') {
               return;
          }else if(elem.id && elem.id=='sideMenuContainer'){
              return;
          }
          elem = elem.parentNode;
       }

       $('#sideMenuContainer').animate({left: '-menuWidth'},300); //点击的不是div或其子元素
       
    });
