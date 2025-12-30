const todoInput = document.querySelector('.todoList');
const dateInput = document.querySelector('.date');
const display = document.querySelector('.result');




let arr = JSON.parse(localStorage.getItem('array')) || [];

renderTodoList();

function onEnter(event) {
    if (event.key === 'Enter') addTodo();
}


function deleteTodo(i) {

    arr.splice(i, 1);
    localStorage.setItem('array', JSON.stringify(arr));
    renderTodoList();

}

function renderTodoList() {

    let htmlContent = '';

    for (let i = 0; i < arr.length; i++) {
        htmlContent += `
            <div>${arr[i].text}</div>
            <div>(${arr[i].date || 'No date'})</div>
            <button class="delete" onclick="deleteTodo(${i});">Delete</button>`;
    }

    display.innerHTML = htmlContent;

}
function addTodo() {

    arr.push({
        text: todoInput.value,
        date: dateInput.value
    });

    localStorage.setItem('array', JSON.stringify(arr));


    todoInput.value = '';
    dateInput.value = '';

    renderTodoList();
}
