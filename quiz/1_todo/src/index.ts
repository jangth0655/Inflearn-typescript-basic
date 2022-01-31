interface ToDo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: ToDo[];

// api
function fetchTodoItems(): ToDo[] {
  const todos: ToDo[] = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): ToDo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: ToDo) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo(
  index: number,
  todo: { id: number; title: string; done: boolean }
) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): ToDo {
  return todoItems[0];
}

function showCompleted(): ToDo[] {
  return todoItems.filter((item: ToDo) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const itemOne = { id: Date.now(), title: "hello", done: true };
  const itemTwo = { id: 101, title: "fine", done: false };
  addTodo(itemOne);
  addTodo(itemTwo);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
