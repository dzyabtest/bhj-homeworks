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

    if (slideIndex < items.length-1){
        showNextSlide(slideIndex+1);
    }
    else
    {
        showNextSlide(0);
    }
}

function prevSlide(){
    let slideIndex = activeSlide();

    hideActiveSlide();

    if (slideIndex > 0){
        showNextSlide(slideIndex-1);
    }
    else
    {
        showNextSlide(items.length-1);
    }
}

//Регистрация обработчиков
document.querySelector('div.slider__arrow_next').onclick = nextSlide;
document.querySelector('div.slider__arrow_prev').onclick = prevSlide;