import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos }) {
  // const todos = [
  //   { id: 1, title: "order fabric" },
  //   { id: 2, title: "design quilt pattern" },
  //   { id: 3, title: "start sewing" },
  // ];

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
