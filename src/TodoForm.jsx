import React, { useRef } from "react";

export default function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef("");

  function handleAddTodo(event) {
    event.preventDefault();

    const title = event.target.title.value;
    onAddTodo(title);
    event.target.title.value = "";
    todoTitleInput.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          ref={todoTitleInput}
          type="text"
          name="title"
          id=""
          placeholder="add a task to your todo list"
        />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
}
