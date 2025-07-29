import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const todos = [
    { id: 1, title: "order fabric" },
    { id: 2, title: "design quilt pattern" },
    { id: 3, title: "start sewing" },
  ];
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
