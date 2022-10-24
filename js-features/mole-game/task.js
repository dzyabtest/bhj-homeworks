// Занятие 1.1, задание 3
const killRate = document.getElementById('dead');
const missRate = document.getElementById('lost');

let kills = 0;
let misses = 0;

function holeClick() {
    if (this.classList.contains( 'hole_has-mole' )) {
        kills += 1;
    }
    else {
        misses +=1;
    }

    killRate.textContent = kills;
    missRate.textContent = misses;

    if (kills === 10) {
        alert('Вы выиграли!');
        kills = 0;
        misses = 0;
    }

    if (misses === 5) {
        alert('Вы проиграли!');
        kills = 0;
        misses = 0;
    }
}

const holes = Array.from(document.getElementsByClassName('hole'));

holes.forEach((item) => {
    item.onclick = holeClick;
});