import "./App.css";
import TodoList from "./features/TodoList/TodoList";
import TodoForm from "./features/TodoForm";
import { useState } from "react";
import TodoListItem from "./features/TodoList/TodoListItem";

function App() {
  const [todoList, setTodoList] = useState([]);

  function updateTodo(editedTodo) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) {
        return { ...editedTodo };
      } else {
        return todo;
      }
    });

    setTodoList(updatedTodos);
  }

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
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
      <TodoListItem todo={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
