//Домашнее задание к занятию 1.3 «Объект события», задание 3

const arrTabCap = Array.from(document.querySelectorAll('div.tab'));
const arrTabContent = Array.from(document.querySelectorAll('div.tab__content'));

function activateTab() {
    let tabIndex;

    if (this.classList.contains('tab_active')) {
        return;
    }

    let currentTab = document.querySelector('div.tab.tab_active');

    currentTab.classList.remove('tab_active');
    
    this.classList.add('tab_active');
    tabIndex = [...this.parentNode.children].indexOf(this)

    let currentContent = document.querySelector('div.tab__content.tab__content_active');

    currentContent.classList.remove('tab__content_active');
    arrTabContent[tabIndex].classList.add('tab__content_active')
}

arrTabCap.forEach(tabItem => {
    tabItem.addEventListener('click', activateTab);
});