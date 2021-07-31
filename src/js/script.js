// let number = 21
// console.log(number);
// let answer = prompt("Вам есть 18?");
// console.log(answer);
// alert(123)

// let answer = confirm("Вам есть 18?", "");
// if (answer){
//     console.log('GO')
// }else{
//     console.log('STOP')
// }

// let isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);

// if(3*3 == 10){
//     console.log('true')
// }else{
//     console.log("false")
// }

// const num = 50;

// if(num < 50){
//     console.log('not correct')
// }else if(num > 100){
//     console.log('too much')
// }else{
//     console.log('correct')
// }

// for(let i = 1; i< 8; i++){
//     console.log(i);
// }

// function logging(a, b, c){
//     console.log(a+b*c)
// }

// logging(3,6,9);

// logging(10, 23, 16)


$(document).ready(function(){
    $('.caruosel__inner').slick({
        infinite: true,
        speed: 500,
        fade: true,
        nav: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow:' <button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
        responsive: [
                {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false   
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function(i){ 
          $(this).on('click', function(e){
              e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });

      $('.catalog-item__back').each(function(i){ 
        $(this).on('click', function(e){
            e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    // function toggleSlide(item){
    //     $('item').each(function(i){ 
    //         $(this).on('click', function(e){
    //             e.preventDefault();
    //           $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //           $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //         })
    //     });
    // };

    // toggleSlide('.catalog-item__link');
    // toggleSlide('.catalog-item__back');

     $('[data-modal=consultation]').on('click', function(){
      $('.overlay,#consultation').fadeIn('slow')
     });
     $('.modal__close').on('click',function(){
      $('.overlay,#concultation, #thanks, #order').fadeOut('slow')
     });
     $('.button_mini').each(function(i){
      $(this).on('click',function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
     });
     function valideForms(form){
      $(form).validate({
       rules:{
         name: "required",
         phone: "required",
         email: {
           required: true,
           email: true
         }
       },
       messages: {
        name: "Пожалуйста, введите своё имя",
        phone: "Пожалуйста, введите свой номер ",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
      });
    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form'); 

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
  });
      $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
          $('.pageup').fadeIn();
        }else{
          $('.pageup').fadeOut();
        }
      });
     
      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});