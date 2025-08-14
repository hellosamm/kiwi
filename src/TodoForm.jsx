import React, { useRef } from "react";

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
        <input
          value={workingTodoTitle}
          onChange={(e) => setWorkingTodoTitle(e.target.value)}
          ref={todoTitleInput}
          type="text"
          name="title"
          id=""
          placeholder="add a task to your todo list"
        />
        <button type="submit" disabled={""}>
          add todo
        </button>
      </form>
    </div>
  );
}
