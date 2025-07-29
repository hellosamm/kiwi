import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";

function App() {
  const todos = [
    { id: 1, title: "order fabric" },
    { id: 2, title: "design quilt pattern" },
    { id: 3, title: "start sewing" },
  ];
  const [newTodo, setNewTodo] = useState("testing");

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
