import React from "react";

export default function TodoList() {
  const todos = [
    { id: 1, title: "order fabric" },
    { id: 2, title: "design quilt pattern" },
    { id: 3, title: "start sewing" },
  ];

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
