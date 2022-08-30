
// Main Visual
// -------------------------------

$(function () {
    // window animation
    //.js-window-trigger
    $(document).ready(function () {
        $(".js-window-trigger").each(function () {
            $(this).addClass('is-active');
        });
    });
});



// jquery
// -------------------------------

$(function () {
    // animation
    // .js-scroll-trigger
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    // animation
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 80) {
                    $(this).addClass('is-active');
                }
            });
        });
    }
    $(window).trigger('scroll');
});


