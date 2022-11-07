//Домашнее задание к занятию 1.2 «Способы поиска нужного HTML-элемента», задание 1
const modalWin = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
//Делаем модельное окно активным
modalWin.classList.add("modal_active");
//Закрываем окно
let elemList = document.querySelectorAll("div.modal__close");
let elemArr = [...elemList];
elemArr.forEach(element => {
    element.onclick = () => {
        modalWin.classList.remove("modal_active");
        modalSuccess.classList.remove("modal_active");
    }
});

//Показываем окно modal_success
document.querySelector("a.show-success").onclick = () => {
    modalSuccess.classList.add("modal_active");
}