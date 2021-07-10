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
});