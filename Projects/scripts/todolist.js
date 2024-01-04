const todolist = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "Christmas",
    dueDate: "2023 - 12 - 25",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const { name, dueDate } = todo;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" "js-delete-button">
        Delete
      </button>
    `;

    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, i) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(i, 1);
        renderTodoList();
        saveToStorage();
      })
    });

}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });


function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value;

  todolist.push({
    name,
    dueDate,
  });
  inputElement.value = "";
  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todolist));
}
