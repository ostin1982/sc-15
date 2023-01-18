$(() => {
    $('.benefit__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    infinite: false,
                }
            },
            {
                breakpoint: 720,
                settings: 'unslick'
            }
        ],
    })


    if($('.js-popup-open')) {
        $('.js-popup-open').click((event) => {
            event.preventDefault();
            $('.popup').addClass('popup_active');
            $('body').addClass('body_lock');
        })

        $('.js-popup-close').click((event) => {
            event.preventDefault();
            $('.popup').removeClass('popup_active');
            $('body').removeClass('body_lock');
        })

        $(document).mouseup((event) => { 
            if (event.target != $('.popup__block')[0] && $('.popup__block').has(event.target).length === 0) {
                $('.popup').removeClass('popup_active');
                $('body').removeClass('body_lock');
            }
        });
    }

    if($('.js-popup-send')) {
        $('.js-popup-send').click((event) => {
            event.preventDefault();
            $('.popup_good').addClass('popup_active');
            $('.popup').removeClass('popup_active');
            $('body').addClass('body_lock');
        })

        $('.js-popup-close').click((event) => {
            event.preventDefault();
            $('.popup_good').removeClass('popup_active');
            $('body').removeClass('body_lock');
        })

        $(document).mouseup((event) => { 
            if (event.target != $('.popup__block_good')[0] && $('.popup__block_good').has(event.target).length === 0) {
                $('.popup_good').removeClass('popup_active');
                $('body').removeClass('body_lock');
            }
        });
    }

    if($('.js-look')) {
        $('.js-look').click((event) => {
            event.preventDefault();
            $('.header__look').addClass('header__look_active');
        })

        $('.js-hide').click((event) => {
            event.preventDefault();
            $('.header__look').removeClass('header__look_active');
        })
    }

    if($('.js-burger')) {
        $('.js-burger').click(() => {
            $('.header__down').addClass('header__down_active');
            $('.header__burger').addClass('header__burger_inactive');
            $('.header__x').addClass('header__x_active');
            $('body').addClass('body_lock');
        })

        $('.js-cross').click(() => {
            $('.header__down').removeClass('header__down_active');
            $('.header__burger').removeClass('header__burger_inactive');
            $('.header__x').removeClass('header__x_active');
            $('body').removeClass('body_lock');
        })
    }

    if($('.footer__item')) {
        $('.footer__trigger').click(function() {
            const parent = $(this).parent('.footer__item');

            if(parent.hasClass('footer__item_active')) {
                parent.removeClass('footer__item_active')
            } else {
                $('.footer__item').removeClass('footer__item_active')
                parent.addClass('footer__item_active')
            }
        })
    }

    if($('.conjuncture__subtitle_more')) {
        $('.conjuncture__more').click((event) => {
            event.preventDefault();
            
            $('.conjuncture__subtitle_more').removeClass('conjuncture__subtitle_more')
            $('.conjuncture__more').addClass('conjuncture__more_inactive')
        })
    }

    if($('.second__not-visible')) {
        $('.second__more').click((event) => {
            event.preventDefault();
            
            $('.second__not-visible').addClass('second__not-visible_visible')
            $('.second__point').addClass('second__point_not-visible')
            $('.second__more').addClass('second__more_not-visible')
        })
    }

    if($('.devices__lists_inactive')) {
        $('.devices__more').click((event) => {
            event.preventDefault();
            
            $('.devices__lists').removeClass('devices__lists_inactive')
            $('.devices__more').addClass('devices__more_inactive')
        })
    }

    if($('.price')) {
        $('.price__link').click(function(event) {
            event.preventDefault();

            $('.price__ref').removeClass('price__ref_active');
            $('.price__table').removeClass('price__table_active');

            $(this).parents('li').addClass('price__ref_active')
            $($(this).attr('href')).addClass('price__table_active')
        })

        $('.price__link:first').click()
    }
})

jQuery(($) => {
    $('.js-phone').mask("+7 (999) 999-99-99");
});

$(document).ready(function() {
    $('#search').hideseek({
        highlight: true,
    });
});

