/* Custom JS written by Homer Gaines http://www.various.media 7-2015 */

$(document).ready(function () {

    var rhythm = 800;


    $('.intro .contactBtn').click(function (e) {

        var thisLink = $(e.target);
        var pageSection = thisLink.attr('href');

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('.' + pageSection).offset().top - 60
        }, rhythm*2, 'easeOutQuint');
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var height = $('.hero .intro').height();

        $('.hero-logo, .fa-angle-down, .contactBtn').css({
            'opacity': ((height - scrollTop) / height)
        });
    });


    $('.why a').click(function () {

        console.log('hit')

        $(this).animate({

            opacity: '0',

        }, 350, function(){


            $(this).css({display:'none'})

            $('.readmore').animate({
            opacity: 'toggle',
            height: 'toggle',

        }, rhythm)




        })


    });



    $('.email-icon').click(function () {

        $('#contactForm').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, rhythm, function () {

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');

        });

    });



    var thisYear = new Date();
    var copyrightYr = thisYear.getUTCFullYear();
    $('.yr').html(copyrightYr)


});
