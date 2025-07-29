import React from "react";

export default function TodoListItem({ todo }) {
  return (
    <div>
      <li>{todo.title}</li>
    </div>
  );
}
