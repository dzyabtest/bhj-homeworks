//Домашнее задание к занятию 2.1 «DOM».Задание 1.

const reveal = document.querySelector('div.reveal');

function reavealIsActive() {
    return reveal.classList.contains('reveal_active');
}

function scrollEvent() {
    const {top, bottom} = reveal.getBoundingClientRect();

    if ((top < window.innerHeight)&&(bottom > 0)) {
        if (reavealIsActive()) {
            return;
        }
        else {
            reveal.classList.add('reveal_active');
        }
    }
    else {
        if (!reavealIsActive()) {
            return;
        }
        else {
            reveal.classList.remove('reveal_active');
        }
    }
}

window.addEventListener('scroll', scrollEvent);