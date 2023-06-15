 AOS.init();

        $('.counter-count').each(function () {
        $(this).prop('boxs',0).animate({
            boxs: $(this).text()
        }, {
            duration: 1000,
            easing:'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
