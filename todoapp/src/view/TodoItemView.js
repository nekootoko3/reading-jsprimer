import { element } from "./html-util.js";

/**
 * @param {TodoItemModel} todoItem
 * @param {function({id: string, completed: boolean})} onUpdateTodo
 * @param {function({id: string})} onDeleteTodo
 * @returns {Element}
 */
export class TodoItemView {
  createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
    const todoItemElement = todoItem.completed
      ? element`<li><input type="checkbox" class="checkbox" checked>
            <s>${item.title}</s>
            <button class="delete">x</button>
          </li>`
      : element`<li><input type="checkbox" class="checkbox">
            ${item.title}
            <button class="delete">x</button>
          </li>`;
    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
    inputCheckboxElement.addEventListener("change", () => {
      onUpdateTodo({
        id: item.id,
        completed: !item.completed,
      });
    });
    const deleteButtonElement = todoItemElement.querySelector(".delete");
    deleteButtonElement.addEventListener("click", () => {
      onDeleteTodo({ id: item.id });
    });
    return todoItemElement;
  }
}
