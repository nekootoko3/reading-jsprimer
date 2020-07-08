let todoIdx = 0;

export class TodoItemModel {
  constructor({ title, completed }) {
    this.idx = todoIdx++;
    this.title = title;
    this.completed = completed;
  }
}
