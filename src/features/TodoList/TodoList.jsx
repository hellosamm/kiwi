import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  todoList,
  onCompleteTodo,
  onUpdateTodo,
  isLoading,
}) {
  // const todos = [
  //   { id: 1, title: "order fabric" },
  //   { id: 2, title: "design quilt pattern" },
  //   { id: 3, title: "start sewing" },
  // ];
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  const displayTodos = (
    <ul>
      {filteredTodoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );

  const noTodos = (
    <div>
      {isLoading ? <p>Todo list loading... </p> : <p>not loading</p>}

      <p>Add a todo above to get started</p>
    </div>
  );

  return <div>{filteredTodoList.length > 0 ? displayTodos : noTodos}</div>;
}
