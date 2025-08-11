import React from "react";

export default function TodoForm({ newTodo, setNewTodo }) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          id=""
          placeholder="add a task to your todo list"
        />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
}
