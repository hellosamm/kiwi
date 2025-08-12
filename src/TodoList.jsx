import React from "react";
import TodoListItem from "./TodoListItem";

export default function todoList({ todoList, onCompleteTodo }) {
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
        />
      ))}
    </ul>
  );

  const noTodos = (
    <div>
      <p>Add a todo above to get started</p>
    </div>
  );

  return <div>{filteredTodoList.length > 0 ? displayTodos : noTodos}</div>;
}
