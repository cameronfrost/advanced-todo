const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");

let todos = loadTodos()
todos.forEach(renderTodo)

list.addEventListener("change", e => {
  if (!e.target.matches("[data-list-item-checkbox]")) return

  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  const todo = todos.find(t => t.id === todoId)
  todo.complete = e.target.checked
  saveTodos()
})

list.addEventListener("click", e => {
  if (!e.target.matches("[data-button-delete]")) return

  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  parent.remove()
  todos = todos.filter(todo => todo.id !== todoId)
  saveTodos()
})

form.addEventListener("submit", e => {
  e.preventDefault()