const addBtn = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function addTask(elem) {
    elem.preventDefault();

    let taskTitle = taskInput.value;

    if (!taskTitle) {return}
    
    let newTask = document.createElement('div');


    newTask.classList.add('task');
    newTask.innerHTML = `<div class="task__title">${taskTitle}</div><a href="#" class="task__remove">&times;</a>`;

    let removeBtn = newTask.querySelector('.task__remove');
    removeBtn.addEventListener('click', removeTask);

    tasksList.appendChild(newTask);
}

function removeTask(elem) {
    let currentTask = elem.srcElement.parentElement;
    
    currentTask.remove();
}

addBtn.addEventListener('click', addTask);
