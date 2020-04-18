$(function () {
    $('.monster').fadeIn('slow');
});

$(window).scroll(function () {
    $('.hideme').each(function (i) {
        let bottom_of_element = $(this).offset().top + $(window).height() / 5;
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        const media = window.matchMedia("(max-width: 905px)");

        if (media.matches) {
            if (bottom_of_window > bottom_of_element) {
                $(this).addClass("appear");
                $(this).find('.hideme1').addClass("appear1");
                $(this).find('.hideme2').addClass("appear2");
                $(this).find('.hideme3').addClass("appear2");
                $(this).find('.hideme4').addClass("appear2");
            }

        } else {
            if (bottom_of_window > bottom_of_element) {
                $(this).addClass("appear");
                $(this).find('.hideme1').addClass("appear1");
                $(this).find('.hideme2').addClass("appear2");
                $(this).find('.hideme3').addClass("appear3");
                $(this).find('.hideme4').addClass("appear4");
            }
        }
    });
});


