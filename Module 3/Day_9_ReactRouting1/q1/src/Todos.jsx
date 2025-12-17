import React, { useState, useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        // Take only first 10 todos
        setTodos(data.slice(0, 10));
      })
      .catch((err) => console.log("Error fetching todos:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todos Page</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: todo.completed ? "#d4edda" : "#f8d7da",
            }}
          >
            <h4>{todo.title}</h4>
            <p>
              Status:{" "}
              {todo.completed ? (
                <span style={{ color: "green" }}>Completed ✅</span>
              ) : (
                <span style={{ color: "red" }}>Not Completed ❌</span>
              )}
            </p>
            <small>
              {todo.completed
                ? "This todo is already done."
                : "This todo is not done yet."}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
