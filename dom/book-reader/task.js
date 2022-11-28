//Домашнее задание к занятию 2.1 «DOM».Задание 3.
const smallFont = document.querySelectorAll('a.font-size')[0];
const normFont = document.querySelectorAll('a.font-size')[1];
const bigFont = document.querySelectorAll('a.font-size')[2];
const bookText = document.getElementById('book');

function clearFont() {
    if (bookText.classList.contains('book_fs-big')) {
        bookText.classList.remove('book_fs-big')
    }
    if (bookText.classList.contains('book_fs-small')) {
        bookText.classList.remove('book_fs-small')
    }
}

function selectFontSize(event) {
    event.preventDefault();
    const activeFont = document.querySelector('a.font-size_active');

    activeFont.classList.toggle('font-size_active');
    this.classList.toggle('font-size_active');

    clearFont();

    switch (this) {
        case smallFont:
            bookText.classList.add('book_fs-small');
        case bigFont:
            bookText.classList.add('book_fs-big');
    }
}

smallFont.onclick = selectFontSize;
normFont.onclick = selectFontSize;
bigFont.onclick = selectFontSize;


