//Домашнее задание к занятию 1.2 «Способы поиска нужного HTML-элемента», задание 3

//Управление слайдами
const items = [...document.querySelectorAll('div.slider__item')];

function activeSlide(){
    index = items.findIndex(item => item.classList.contains('slider__item_active'))
    if (index == -1) {
        index = 0;
    }
    
    return index;
}

function hideActiveSlide(){
    items[activeSlide()].classList.remove('slider__item_active');
}

function showNextSlide(index){
    items[index].classList.add('slider__item_active');
}

function nextSlide(){
    let slideIndex = activeSlide();

    hideActiveSlide();

    showNextSlide(slideIndex < items.length - 1 ? slideIndex + 1 : 0);
}

function prevSlide(){
    let slideIndex = activeSlide();

    hideActiveSlide();

    showNextSlide(slideIndex > 0 ? slideIndex - 1 : items.length-1);
}

//Регистрация обработчиков
document.querySelector('div.slider__arrow_next').onclick = nextSlide;
document.querySelector('div.slider__arrow_prev').onclick = prevSlide;