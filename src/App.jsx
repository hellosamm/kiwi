import "./App.css";

function App() {
  const todos = [
    { id: 1, title: "order fabric" },
    { id: 2, title: "design quilt pattern" },
    { id: 3, title: "start sewing" },
  ];
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
