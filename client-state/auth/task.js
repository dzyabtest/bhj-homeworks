const formBtn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const url = 'https://students.netoservices.ru/nestjs-backend/auth';

const formData = new FormData(form);
const xhr = new XMLHttpRequest();

formBtn.addEventListener('click',(e) => {
    e.preventDefault();

    xhr.open('POST', url, true);
    xhr.send(formData);

});

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let respOject = JSON.parse(xhr.responseText);
        let authSuccess = respOject.response.Success;

        if (authSuccess) {
            userId.textContent = respOject.response.user_id;
            welcome.classList.add('welcome_active');
        }
        else {
            alert('Неверные логин и пароль!');
        }
 
    }
}

