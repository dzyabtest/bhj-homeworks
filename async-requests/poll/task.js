const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let respOject = JSON.parse(xhr.responseText);
        let pollTitleText = respOject.data.title;
        let answers = respOject.data.answers;

        pollTitle.textContent = pollTitleText;

        answers.forEach(elem => {
            let answer = document.createElement('button');
            answer.classList.add('poll__answer');
            answer.textContent = elem;
            answer.addEventListener('click', () => {alert('Спасибо, ваш голос засчитан!')});

            pollAnswers.append(answer);
        });

        
    }
}
