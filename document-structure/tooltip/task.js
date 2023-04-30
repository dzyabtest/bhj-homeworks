const tipElem = document.createElement('div');
let currentElem = {};

tipElem.classList.add('tooltip');

tippedElem = document.getElementsByClassName('has-tooltip');
tippedArr = Array.from(tippedElem);

tippedArr.forEach(tippedElem => {
    tippedElem.addEventListener('click', (elem) => {
        elem.preventDefault();

        tipElem.style.left = elem.srcElement.getBoundingClientRect().left + 'px';
        tipElem.style.top = elem.srcElement.getBoundingClientRect().bottom + 'px';
        tipElem.textContent = elem.srcElement.textContent;

        if (currentElem != elem.srcElement) {
            tipElem.classList.add('tooltip_active');

            elem.srcElement.insertAdjacentElement('afterend',tipElem);

            currentElem = elem.srcElement;
        }
        else {
            tipElem.classList.remove('tooltip_active');
            currentElem = {};
        }
    });

document.addEventListener('scroll', () => {
        tipElem.classList.remove('tooltip_active');
        currentElem = {};
    });    
});

document.addEventListener('click', (elem) => {
    if (!elem.srcElement.classList.contains('has-tooltip')) {
        tipElem.classList.remove('tooltip_active');
        currentElem = {};
    }
});    

