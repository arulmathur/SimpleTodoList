const todos = JSON.parse(localStorage.getItem('todos')) || [];
let numTodos = JSON.parse(localStorage.getItem('numTodos')) || 0;

function addTodo() {
  const name = document.getElementById('todoInput');
  const date = document.getElementById('todoDate');

  const todo = new Object();

  todo.name = name.value;
  todo.date = date.value;
  todo.number = numTodos;

  todos.push(todo);

  displayTodos();
  numTodos++;
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('numTodos', numTodos);
}

function deleteTodo(n) {
  todos.splice(n, 1);
  numTodos--;
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('numTodos', numTodos);
}

function displayTodos() {
  document.getElementById('todoList').innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const html = `
      <div> ${todo.name} </div>
      <div> ${todo.date} </div>
      <button id="delete" onclick="
        deleteTodo(${i});
        displayTodos();
          ">Delete</button>
    `;

    document.getElementById('todoList').innerHTML += html;
  }
}

