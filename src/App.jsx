import "./App.css";
import TodoList from "./features/TodoList/TodoList";
import TodoForm from "./features/TodoForm";
import { useEffect, useState } from "react";
import TodoListItem from "./features/TodoList/TodoListItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
    import.meta.env.VITE_TABLE_NAME
  }`;
  const token = `Bearer ${import.meta.env.VITE_PAT}`;
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);

      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };

      try {
        const resp = await fetch(url, options);

        if (!resp.ok) {
          throw new Error(resp.message);
        }

        const data = await resp.json();

        const todos = data.records.map((record) => {
          const todo = {
            id: record.id,
            title: record.fields.title || "",
            isCompleted: record.fields.isCompleted ? true : false,
          };

          return todo;
        });

        setTodoList(todos);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const updateTodo = async (editedTodo) => {
    const originalTodo = todoList.find((todo) => todo.id === editedTodo.id);

    const payload = {
      records: [
        {
          id: editedTodo.id,
          fields: {
            title: editedTodo.title,
            isCompleted: editedTodo.isCompleted,
          },
        },
      ],
    };

    const options = {
      method: "PATCH",
      headers: { Authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    try {
      // console.log(
      //   "Payload being sent to Airtable:",
      //   JSON.stringify(payload, null, 2)
      // );
      const resp = await fetch(url, options);

      if (!resp.ok) {
        throw new Error(resp.message);
      }
    } catch (error) {
      setErrorMessage(`${error.message}. Reverting todo...`);
      const revertedTodos = todoList.map((todo) =>
        todo.id === origin.id ? originalTodo : todo
      );
      setTodoList(revertedTodos);
    } finally {
      setIsSaving(false);
    }

    const updatedTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) {
        return { ...editedTodo };
      } else {
        return todo;
      }
    });

    setTodoList(updatedTodos);
  };

  const addTodo = async (newTodo) => {
    const payload = {
      records: [
        {
          fields: {
            title: newTodo.title,
            isCompleted: newTodo.isCompleted,
          },
        },
      ],
    };

    const options = {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    setIsSaving(true);

    try {
      console.log(
        "Payload being sent to Airtable:",
        JSON.stringify(payload, null, 2)
      );
      const resp = await fetch(url, options);

      if (!resp.ok) {
        throw new Error(resp.message);
      }

      const { records } = await resp.json();

      const savedTodos = {
        id: records[0].id,
        ...records[0].fields,
      };

      if (!savedTodos.isCompleted) {
        savedTodos.isCompleted = false;
      }

      setTodoList([...todoList, savedTodos]);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const completeTodo = async (todoId) => {
    const originalTodo = todoList.find((todo) => todo.id === todoId);

    const updatedTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: true };
      }
    });

    setTodoList(updatedTodos);

    const payload = {
      records: [
        {
          id: todoId,
          fields: {
            isCompleted: true,
          },
        },
      ],
    };

    const options = {
      method: "PATCH",
      headers: { Authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    setIsSaving(true);

    try {
      // console.log(
      //   "Payload being sent to Airtable:",
      //   JSON.stringify(payload, null, 2)
      // );
      const resp = await fetch(url, options);

      if (!resp.ok) {
        throw new Error(resp.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
      const revertedTodos = todoList.map((todo) => {
        if (todo.id == todoId) {
          return originalTodo;
        }
      });
      setTodoList(revertedTodos);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} isSaving={isSaving} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
        isLoading={isLoading}
      />
      <TodoListItem todo={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
