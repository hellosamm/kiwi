import React, { useState, useEffect } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";

export default function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  useEffect(() => {
    setWorkingTitle(todo.title);
  }, [todo]);

  const handleCancel = () => {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  };

  const handleUpdate = (event) => {
    if (!isEditing) return;

    event.preventDefault();

    onUpdateTodo({
      ...todo,
      title: workingTitle,
    });

    setIsEditing(false);
  };

  if (!todo) return null;
  if (!todo.title) return null;

  return (
    <div>
      <li>
        <form onSubmit={handleUpdate}>
          {isEditing ? (
            <>
              <TextInputWithLabel
                value={workingTitle}
                onChange={(e) => setWorkingTitle(e.target.value)}
              />
              <button type="button" onClick={() => handleCancel()}>
                Cancel
              </button>
              <button type="submit">Update</button>
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
