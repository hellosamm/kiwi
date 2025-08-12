import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";
import TodoListItem from "./TodoListItem";

function App() {
  const preloadedTodos = [
    // { id: 1, title: "order fabric" },
    // { id: 2, title: "design quilt pattern" },
    // { id: 3, title: "start sewing" },
  ];
  const [todoList, setTodoList] = useState(preloadedTodos);

  function addTodo(title) {
    const newTodo = {
      title: title,
      id: Date.now(),
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  }

  function completeTodo(todoId) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: true };
      }

      return todo;
    });

    setTodoList(updatedTodos);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
      <TodoListItem todo={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
