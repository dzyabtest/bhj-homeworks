//Домашнее задание к занятию 2.1 «DOM».Задание 2.
let timerId;

function rotate() {
    const activeAds = Array.from(document.querySelectorAll('span.rotator__case_active'));

    activeAds.forEach((item)=>{
        item.classList.toggle('rotator__case_active');
        
        if (item.nextElementSibling) {
            item.nextElementSibling.classList.toggle('rotator__case_active');
        }
        else {
            item.parentElement.firstElementChild.classList.toggle('rotator__case_active');
        }
    })
}

timerId = setInterval(rotate, 1000);