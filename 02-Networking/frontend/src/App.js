import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8000/todos");
    setTodos(response.data.todos);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8000/todos", {
      name: newTodo,
    });

    setTodos([
      ...todos,
      {
        name: data.todo.name,
        completed: data.todo.completed,
        _id: data.todo._id,
      },
    ]);

    setNewTodo("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);

    const updatedTodos = todos.filter((todos) => todos._id !== id);

    setTodos(updatedTodos);
  };

  const handleToggle = async (id) => {
    await axios.put(`http://localhost:8000/todos/${id}`);

    const updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todoapp stack-large">
      <h1>What to Todo</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          value={newTodo}
        />
        <button
          type="submit"
          className="btn btn__primary btn__lg"
          onClick={handleClick}
        >
          Add
        </button>
      </form>

      {todos.length ? (
        <h2 id="list-heading">
          {todos.reduce((sum, todo) => {
            if (todo.completed) return sum;
            return sum + 1;
          }, 0)}{" "}
          tasks remaining
        </h2>
      ) : null}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todos.map((todo, index) => (
          <li className="todo stack-small">
            <div className="c-cb">
              <input
                id="todo-0"
                type="checkbox"
                defaultChecked={todo.completed}
                onChange={() => handleToggle(todo._id)}
              />
              <label className="todo-label" htmlFor="todo-0">
                {todo.name}
              </label>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => {
                  handleDelete(todo._id, index);
                }}
              >
                Delete <span className="visually-hidden">Eat</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
