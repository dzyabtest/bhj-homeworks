let editor = document.getElementById('editor');

editor.value = localStorage.getItem('storedText');

editor.addEventListener('input',() => {localStorage.setItem('storedText', editor.value);})
