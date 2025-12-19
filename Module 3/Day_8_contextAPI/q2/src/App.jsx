// App.jsx
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  return (
    <Todos>
      <AddTodo />
      <TodoList />
    </Todos>
  );
}

export default App;
