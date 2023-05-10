$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 474) {
        $("header").addClass("add-bg");
        $("#up-button").addClass("up-btn");

        
      } else {
        $("header").removeClass("add-bg");
        $("#up-button").removeClass("up-btn");
       
      }
    });
   
  });