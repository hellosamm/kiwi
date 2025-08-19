import React, { useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";

export default function TodoListItem({ todo, onCompleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  if (!todo) return null;
  if (!todo.title) return null;

  return (
    <div>
      {isEditing ? (
        <TextInputWithLabel value={todo.title} />
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onCompleteTodo(todo.id)}
          />
          <span onClick={() => setIsEditing(true)}>{todo.title}</span>
        </form>
      )}
    </div>
  );
}
