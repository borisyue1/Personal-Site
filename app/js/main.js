$('a[href^="#"]').on('click', function(event) {//smooth scrolling
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 1000);
    }
});

//for scrolling navbar
// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#home').height();
// on scroll, 
$(window).on('scroll',function(){
    var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom - 100) {
        $('.nav-bar').addClass('past-home');
    } else {
        $('.nav-bar').removeClass('past-home');
    }
    checkPosition(stop, mainbottom);
});
function checkPosition(stop, mainbottom){
    $('li a').removeClass('active');
    if(stop < mainbottom - 100){
        $('#home-tag').addClass('active');
    }
    else if(stop > mainbottom * 2 - 150){
        $('#resume-tag').addClass('active');
    } 
    else if(stop > mainbottom - 100){
        $('#about-tag').addClass('active');
    }

}
function dropDown(){
    var x = $('#drop-down');
    $(x).toggleClass("responsive");
}

