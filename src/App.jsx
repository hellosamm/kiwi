import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";

function App() {
  // const preloadedTodos = [
  //   // { id: 1, title: "order fabric" },
  //   // { id: 2, title: "design quilt pattern" },
  //   // { id: 3, title: "start sewing" },
  // ];

  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    const newTodo = {
      title: title,
      id: Date.now(),
    };

    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
