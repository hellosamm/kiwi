import React, { useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

export default function TodoForm({ onAddTodo, isSaving }) {
  const todoTitleInput = useRef("");
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();

    const title = event.target.title.value;
    onAddTodo({ title: workingTodoTitle, isCompleted: false });
    setWorkingTodoTitle("");
    todoTitleInput.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <TextInputWithLabel
          ref={todoTitleInput}
          value={workingTodoTitle}
          onChange={(e) => setWorkingTodoTitle(e.target.value)}
          elementId="todoTitle"
          labelText="Todo"
        />
        <button type="submit" disabled={""}>
          {isSaving ? "saving" : "add todo"}
        </button>
      </form>
    </div>
  );
}
