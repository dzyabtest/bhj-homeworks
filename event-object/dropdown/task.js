//Домашнее задание к занятию 1.3 «Объект события», задание 1

const mainItem = document.querySelector("ul.dropdown__list");
const mainValue = document.querySelector("div.dropdown__value");
const itemsList = Array.from(document.querySelectorAll("a.dropdown__link"));

function mainItemClick() {
    let opened = false;

    opened = mainItem.classList.contains("dropdown__list_active");

    if (opened) {
        mainItem.classList.remove("dropdown__list_active");
    }
    else {
        mainItem.classList.add("dropdown__list_active");
    }

    return;
}

function listItemClick(event) {
    event.preventDefault();
    mainItemClick();

    itemValue = this.textContent.trim();

    mainValue.textContent = itemValue;

    return;
}

mainValue.addEventListener('click', mainItemClick);

itemsList.forEach(item => {
    item.onclick = listItemClick;
});