import React, { useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

export default function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef("");
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();

    const title = event.target.title.value;
    onAddTodo(workingTodoTitle);
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
          add todo
        </button>
      </form>
    </div>
  );
}
