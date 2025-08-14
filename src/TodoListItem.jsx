import React from "react";

export default function TodoListItem({ todo, onCompleteTodo }) {
  if (!todo) return null;
  if (!todo.title) return null;

  return (
    <div>
      {/* <li> */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onCompleteTodo(todo.id)}
        />
        {todo.title}
      </form>
      {/* </li> */}
    </div>
  );
}
