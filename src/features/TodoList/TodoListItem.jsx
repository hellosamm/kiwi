import React, { useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";

export default function TodoListItem({ todo, onCompleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  const handleCancel = () => {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  };

  if (!todo) return null;
  if (!todo.title) return null;

  return (
    <div>
      <li>
        <form>
          {isEditing ? (
            <>
              <TextInputWithLabel value={todo.title} />
              <button type="button" onClick={() => handleCancel()}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => onCompleteTodo(todo.id)}
                />
              </label>
              <span onClick={() => setIsEditing(true)}>{todo.title}</span>
            </>
          )}
        </form>
      </li>
    </div>
  );
}
