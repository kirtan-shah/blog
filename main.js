$(document).ready(function() {
  $("#bar").css({
    "width" : window.innerWidth + "px",
    "height" : (window.innerHeight * 0.17) + "px"
  });
  $("#leftmenu").css({
     "top": $("#bar").height() + "px",
     "width" : (window.innerWidth * 0.15) + "px",
     "height" : (window.innerHeight - $("#bar").height()) + "px"
  });
});
