const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');
const fileButton = document.querySelector('span.input__wrapper-button');
const button = document.getElementById('send');
const url = 'https://students.netoservices.ru/nestjs-backend/upload';

const formData = new FormData(form);
const xhr = new XMLHttpRequest();

xhr.upload.addEventListener('progress', (event) => {
    let progressValue = (event.loaded/event.total).toFixed(1);

    progress.value = progressValue;
});

button.addEventListener('click', () => {
    progress.value = 0;
});

fileButton.addEventListener('click', () => {
    progress.value = 0;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    xhr.open('POST', url, true);
    xhr.send(formData);
})