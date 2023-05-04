const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const chatRepls = [
    'Я занят!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Приходите завтра!',
    'Я уже отвечал на этот вопрос!',
    'Ходят тут всякие!',
    'Вы по какому вопросу, товарищ?',
    'Вас много, а я один!'
];

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

chatInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        let message = e.srcElement.value;
        let replMessage = arrayRandElement(chatRepls);
        let date = new Date();
        let time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        if (!message.trim()) {return;}

        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${message}</div>
        </div>
        `;

        e.srcElement.value = '';
        messages.lastElementChild.scrollIntoView();

        let replTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${replTime}</div>
            <div class="message__text">${replMessage}</div>
        </div>
        `;

        messages.lastElementChild.scrollIntoView();

}
})