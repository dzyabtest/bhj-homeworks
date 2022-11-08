//Домашнее задание к занятию 1.2 «Способы поиска нужного HTML-элемента», задание 2

//Регистрируем обработчики click для главного меню
let elemList = document.querySelectorAll("a.menu__link");
let elemArr = [...elemList];
elemArr.forEach(element => {
    if (element.parentElement.parentElement.classList.contains('menu_main')){
        element.onclick = () =>{
            //Скрываем видимое меню
            let currentMenu;
            currentMenu = document.querySelector("ul.menu_active");
            if (currentMenu){
                currentMenu.classList.remove("menu_active");
                //Если был клик на открытом меню - прерываем обработчик
                if (currentMenu.parentElement == element.parentElement) {return}
            }

            //Ищем родительский элемент
            let mainItem = element.parentElement;
            //Выбираем дочерние элементы с меню
            let arrMenu = [...mainItem.getElementsByClassName("menu_sub")];
            if (arrMenu.length == 0) {return}
            
            arrMenu.forEach(subMenuItem => {
                //Видимость для меню
                subMenuItem.classList.add("menu_active")
            });
            return false;
        };
    }
});

