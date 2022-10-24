
// Занятие 1.1, задание 2
let count = 0;
let clickMode = 'enlarge';

const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = () => {
    count = count + 1;
    clickerCounter.textContent = count;

    if (clickMode == 'enlarge') {
        clickMode = 'reduce';
        cookie.width = 220;
    }
    else {
        clickMode = 'enlarge';
        cookie.width = 200;
    }
};