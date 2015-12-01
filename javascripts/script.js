
if ($(window).width() < 600) {

} else {
    var heights = $(".mission-bloc").map(function ()
                                         {
        return $(this).innerHeight();
    }).get(),

        maxHeight = Math.max.apply(null, heights);
    $(".mission-bloc").css("height",maxHeight);

    var heights = $(".main-list .bloc").map(function ()
                                            {
        return $(this).innerHeight();
    }).get(),

        maxHeight = Math.max.apply(null, heights);
    $(".main-list .bloc").css("height",maxHeight);
}

$('body').scrollspy({
    offset: 85 ,
    target: '#navbar'
});

var height = $(window).height()-79;
$('#yoobaki .top').css('height',height);

$( window ).resize(function() {
    var height = $(window).height()-79;
    $('#yoobaki .top').css('height',height);
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            var width = $(window).width();
            var width = -width/6+145;
            if ((target.length)&&(target.selector == '#yoob')) {
                $('html,body').animate({
                    scrollTop: target.offset().top-85
                }, 1000);
                return false;
            }
            if ((target.length)&&(target.selector == '#innover')) {
                $('html,body').animate({
                    scrollTop: target.offset().top-78
                }, 1000);
                return false;
            }
            if ((target.length)&&(target.selector == '#mission')) {
                $('html,body').animate({
                    scrollTop: target.offset().top-78
                }, 1000);
                return false;
            }
            if ((target.length)&&(target.selector == '#intervention')) {
                $('html,body').animate({
                    scrollTop: target.offset().top-78
                }, 1000);
                return false;
            }
            if ((target.length)&&(target.selector == '#vousetes')) {
                $('html,body').animate({
                    scrollTop: target.offset().top-78
                }, 1000);
                return false;
            }
            if ((target.length)&&(target.selector == '#contact')) {
                $('html,body').animate({
                    scrollTop: target.offset().top-78
                }, 1000);
                return false;
            }
        }
    });
});


$('.navbar-nav a').on('click',function(){
    if($('.navbar-collapse').hasClass('in')){
        $('#navbar').collapse('toggle');
    }else{

    }
});
