//Домашнее задание к занятию 1.2 «Способы поиска нужного HTML-элемента», задание 3

//Управление слайдами
const items = [...document.querySelectorAll('div.slider__item')];

function hideActiveSlide(){
    items[activeSlide].classList.remove('slider__item_active');
}

function showActiveSlide(){
    items[activeSlide].classList.add('slider__item_active');
}

function nextSlide(){
    hideActiveSlide();
    activeSlide +=1;
    if (activeSlide > items.length-1){
        activeSlide = 0;
    }
    showActiveSlide();
}

function prevSlide(){
    hideActiveSlide();
    activeSlide -=1;
    if (activeSlide < 0){
        activeSlide = items.length-1;
    }
    showActiveSlide();
}

let activeSlide = 0;

//Регистрация обработчиков
document.querySelector('div.slider__arrow_next').onclick = nextSlide;
document.querySelector('div.slider__arrow_prev').onclick = prevSlide;