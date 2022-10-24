// Занятие 1.1, задание 1
let timerId = 0;
let timerValue = 0;

timerValue = Number(document.getElementById('timer').textContent);

timerId = setInterval(() => {
    document.getElementById('timer').textContent = timerValue;

    if (timerValue >= 0) {
        timerValue -=1;
    }
    else {
        clearInterval(timerId);
        document.getElementById('timer').textContent = 0;
        alert('Вы победили в конкурсе!');
    }
}, 200);


