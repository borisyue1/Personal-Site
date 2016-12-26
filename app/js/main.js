//vertically align
$(document).ready(function(){
  var height = $('#header').height();
  var h = height/2;
  var w1 = $(window).height();
  var w = w1/2;
  var m = w - h
  $('#header').css("margin-top",m - 50 + "px")
});
