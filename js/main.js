(function ($) {
    "use strict";

    var initialHref = window.location.href;
    
    // Dropdown on mouse hover
    $(document).ready(function () {

        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        $("#formSaberMais").submit((val) => {
            let nome = $("#formSaberMais :input").val();
            let selects = [];
            $("#formSaberMais > div > select").each(function() {
                selects.push($(this).val());
            })
            let servico = selects[0]
            let pet = selects[1];
            
            if(!servico){
                alert("Selecione um serviço.");
                return false;
            }
            if(!pet){
                alert("Selecione qual é seu pet.");
                return false;
            }

            let text = `Olá meu nome é ${nome}, gostaria de saber mais sobre ${servico} e eu tenho um ${pet}.`;

            window.open("https://wa.me/5551999411467?text=" + text);
        })
        
    });
    
    
    // Back to top button
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }

        if($(this).scrollTop() < $('h4.to-us-title').offset().top){
            location.hash = '/';
        }  
        if ($(this).scrollTop() >= $('h4.to-us-title').offset().top - 20 && $(this).scrollTop() < $('h4.to-schedule-title').offset().top - 20){
            location.hash = "#/sobre-nos";    
        }  
        if ($(this).scrollTop() >= $('h4.to-schedule-title').offset().top - 20 && $(this).scrollTop() < $('h4.to-services-title').offset().top - 20){
            location.hash = "#/agende-para-seu-pet";    
        }  
        if ($(this).scrollTop() >= $('h4.to-services-title').offset().top - 20 && $(this).scrollTop() < $('h4.to-plans-title').offset().top - 20){
            location.hash = "#/servicos";    
        }  
        if ($(this).scrollTop() >= $('h4.to-plans-title').offset().top - 20){
            location.hash = "#/planos";    
        } 
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        location.hash = "/";
        return false;
    });
    
    $('.to-us').click(function () {
        $('html, body').animate({scrollTop: $('h4.to-us-title').offset().top - 21}, 1500, 'easeInOutExpo');
        setTimeout(() => {
            location.hash = "#/sobre-nos";
        }, 1550)
        return false;
    });

    $('.to-service').click(function () {
        $('html, body').animate({scrollTop: $('h4.to-services-title').offset().top - 20}, 1500, 'easeInOutExpo');
        setTimeout(() => {
            location.hash = "#/servicos";    
        }, 1550)
        return false;
    });

    $('.to-plans').click(function () {
        $('html, body').animate({scrollTop: $('h4.to-plans-title').offset().top - 20}, 1500, 'easeInOutExpo');  
        setTimeout(() => {
            location.hash = "#/planos";
        }, 1550)
        return false;
    });

    $('.to-schedule').click(function () {
        $('html, body').animate({scrollTop: $('h4.to-schedule-title').offset().top - 20}, 1500, 'easeInOutExpo');
        setTimeout(() => {
            location.hash = "#/agende-para-seu-pet";
        }, 1550)
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


