
var $root = $('html, body');

$('a[href^="#"]').on('click', function(event) {//smooth scrolling
    var target = $(this.getAttribute('href'));
    if( target.length) {
        event.preventDefault();
        $root.stop().animate({
            scrollTop: target.offset().top}, 1000);
    }
});

//for scrolling navbar
// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#home').height();
// on scroll, 
$(window).on('scroll',function(){
    var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom - 100) {
        $('.nav-bar').addClass('gradient');
    } else {
        $('.nav-bar').removeClass('gradient');
    }
    checkPosition(stop, mainbottom);
});
//highlight an a tag based on scroll position
function checkPosition(stop, mainbottom){
    $('li a').removeClass('active');
    if(stop < mainbottom - 50){
        $('#home-tag').addClass('active');
    }
    else if(stop > mainbottom * 2 - 70){
        $('#resume-tag').addClass('active');
        if($(window).width() <= 935 && stop > mainbottom * 3) {
            animateCourseList();//for when skills and courses become stacked
        }
        // to animate skillbar
        if(stop > mainbottom * 2 + 50){
            animateSkillBar();
            if($(window).width() > 935) {
                animateCourseList();
            }
        }
    } 
    else if(stop > mainbottom - 50){
        $('#about-tag').addClass('active');
    }

}
function dropDown(){
    var x = $('#drop-down');
    $(x).toggleClass("responsive");
}

function animateSkillBar(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });
}

function animateCourseList(){
    $('#list-courses ol li').each(function(i){
        var $t = $(this);
        setTimeout(function(){ $t.addClass('list-fade-in'); }, (i+1) * 120);
    });
}



    

