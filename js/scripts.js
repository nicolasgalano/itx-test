// *************************************
//
//   Custom scripts
//
// *************************************

$(document).ready(function () {

// Logo/Iso on scroll

    $(window).scroll(function(){
        if($(document).width() > 959) {
            if(!$('.wrap').hasClass('abrir-taller')) {
                if($(document).scrollTop() > 50) {
                    $('.main-logo').fadeOut('fast');
                    $('.main-iso').fadeIn('slow');
                }
                else
                {
                    $('.main-iso').fadeOut('fast');
                    $('.main-logo').fadeIn('slow');
                }
            }
            else
            {
                $('.main-logo').fadeOut('fast');
                $('.main-iso').fadeIn('slow');
            }
        }
    });


// Remove menu shadow if below Intro section
    if($("#adn").length){
        var changeMenu = $("#adn").offset().top;
        $(window).scroll(function() {
            if($(window).scrollTop() > changeMenu) {
                $('.navbar-left').removeClass('shadow');
            }
            else
            {
                $('.navbar-left').addClass('shadow');
            }
        });

        var height = $(window).scrollTop();
        if(height  > changeMenu) {
            $('.navbar-left').removeClass('shadow');
        }
    }


// Smooth scroll to section

    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        $('html, body').stop().animate({
            'scrollTop': target.offset().top+2
        }, 800, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });


// Menu state change on scroll

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        if( !$('body.taller').length ){
            $('.navbar-left-link').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-left-link').removeClass('active');
                    currLink.addClass('active');
                }
                else{
                    currLink.removeClass('active');
                }
            });
        }
    }


// Slider Concursos

    $('#carousel-concurso').lightSlider({
        controls: true,
        loop: false,
        keyPress: true,
        item: 2,
        pager: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                item: 1
            }
        }]
    });

// Add classes to first taller
    $('.carousel-item:first').addClass('primero active');


// Talleres - Open Detail

    $('.listado-talleres-item a.block-link-desktop').click(function () {
        var tallerPosition = $(this).attr('data-position');
        $('.carousel-inner .carousel-item').removeClass('active');
        $('.carousel-inner .carousel-item:nth-child('+tallerPosition+')').addClass('active');
        if(tallerPosition>1){
            $('.carousel-control-prev').show();
        }
        $('.wrap').toggleClass('abrir-taller');
        $('.main-logo').fadeOut();
        $('.main-iso').fadeIn();
        $('.parallax-mirror').fadeOut();
        $('#talleres-detail').toggleClass('open');
    });

    $('.listado-talleres .abrir-taller').click(function () {
        $('.carousel-inner .carousel-item').removeClass('active');
        $('.carousel-item:first').addClass('active');
        $('.wrap').toggleClass('abrir-taller');
        $('.main-logo').fadeOut();
        $('.main-iso').fadeIn();
        $('.parallax-mirror').fadeOut();
        $('#talleres-detail').toggleClass('open');
    });

    $('.navbar-left-link, .main-iso, .detalle-taller-cerrar').click(function () {
        $('.wrap').removeClass('abrir-taller');
        $('.parallax-mirror').fadeIn();
        $('#talleres-detail').removeClass('open');
    });


// Talleres - Slider arrows at start/end

    var checkitem = function() {
        var $this;
        $this = $(".carousel");
        if ($("#carouselTalleres .primero").hasClass("active")) {
            $this.children(".carousel-control-prev").hide();
            $this.children(".carousel-control-next").show();
        } else if ($("#carouselTalleres .ultimo").hasClass("active")) {
            $this.children(".carousel-control-next").hide();
            $this.children(".carousel-control-prev").show();
        } else {
            $this.children(".carousel-control").show();
        }
    };
    checkitem();
    $("#carouselTalleres").on("slid.bs.carousel", "", checkitem);


// Talleres -  Open Calendar

    $('.abrir-calendario').mouseenter(function () {
        $('.calendario').toggleClass('open');
    });
    $('.carousel-control').mouseleave(function () {
        $('.calendario').removeClass('open');
    });


// Talleres - open Bio popup

    $('.abrir-bio').click(function () {
        $('.detalle-taller-cerrar').fadeOut();
        $('.bio-cerrar').fadeIn();
        $('.carousel-control').fadeOut();
    });

    $('.abrir-bio').click(function () {
        var prof_id = this.id;
        prof_id = prof_id.substring('abrir-bio-'.length);
        $(this).closest('.taller-info').find('#profesor-bio-'+prof_id).fadeIn();
    });

    $('.taller-profesor-bio .close').click(function () {
        $('.bio-cerrar').fadeOut();
        $('.detalle-taller-cerrar').fadeIn();
        $('#carouselTalleres .carousel-control').fadeIn();
    });

    $('.taller-profesor-bio .close').click(function () {
        $('.taller-profesor-bio').fadeOut();
    });


// Concurso -

    $('.abrir-inscripcion').click(function () {
        $('.formulario-concurso').fadeIn();
    });
    $('.formulario-concurso .close').click(function () {
        $('.formulario-concurso').fadeOut();
    });


// Recorrido -

    $('.abrir-inscripcion-recorrido').click(function () {
        $('.formulario-recorrido').fadeIn();
    });
    $('.formulario-recorrido .close').click(function () {
        $('.formulario-recorrido').fadeOut();
    });


//TALLERES DETAIL MOBILE

    if(($('body.taller').length) && window.location.hash) {
        var tallerPosition = window.location.hash.substring(1);
        $('.carousel-inner .carousel-item').removeClass('active');
        $('.carousel-inner .carousel-item:nth-child('+tallerPosition+')').addClass('active');
        if(tallerPosition>1){
            $('.carousel-control-prev').show();
        }
    }


//MOBILE MENU

    if($('body.home').length){
        $('.mobile-btn').click(function(){
            $('.mobile-nav').fadeIn();
        });
        $('.mobile-nav .mobile-nav-cerrar').click(function(){
            $('.mobile-nav').fadeOut();
        });
        $('.mobile-nav .navbar-center-link').click(function(){
            $('.mobile-nav').fadeOut();
        });
    }

});



