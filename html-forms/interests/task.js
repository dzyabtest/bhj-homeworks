const checkBoxes = Array.from(document.querySelectorAll('.interest__check'));

checkBoxes.forEach((elem) => {
    elem.addEventListener('click',(e) => {
        const checkBox = e.srcElement;
        const childCheckBoxes = Array.from(checkBox.closest('li').querySelectorAll('.interest__check'));
        childCheckBoxes.shift();

        childCheckBoxes.forEach((childElem) => {
            childElem.checked = elem.checked;
        });
    })
});
