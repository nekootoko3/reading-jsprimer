import { element } from "./html-util.js";
import { TodoItemView } from "./TodoItemView.js";

export class TodoListView {
  /**
   * @param {TodoItemModel[]} todoItems
   * @param {function({id:string, completed: boolean})} onUpdateTodo
   * @param {function({id:string})} onDeleteTodo
   * @returns {Element}
   */
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const todoListElement = element`<ul />`;
    const todoItemView = new TodoItemView();
    todoItems.forEach((todo) => {
      const TodoItemElement = todoItemView.createElement(todo, {
        onUpdateTodo,
        onDeleteTodo,
      });
      todoListElement.appendChild(TodoItemElement);
    });
    return todoListElement;
  }
}
