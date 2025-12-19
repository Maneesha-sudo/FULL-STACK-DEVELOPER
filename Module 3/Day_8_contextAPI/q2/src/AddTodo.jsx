// AddTodo.jsx
import { useContext, useRef } from "react";
import { TodoContext } from "./Todos";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    const title = inputRef.current.value;
    if (!title) return;

    addTodo(title);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" placeholder="Enter todo" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
