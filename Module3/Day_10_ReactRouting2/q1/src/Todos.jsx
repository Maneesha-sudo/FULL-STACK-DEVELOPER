import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 10)); // first 10 todos
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading todos...</h3>;
  }

  return (
    <div>
      <h2>Todos Page</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
