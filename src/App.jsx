import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const STORAGE_KEY = "vite-react-todos";

export default function App() {
  const [todos, setTodos] = useLocalStorage(STORAGE_KEY, []);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!text.trim()) return;

    if (editId) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos(prev => [
        { id: Date.now(), text, completed: false },
        ...prev
      ]);
    }

    setText("");
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = todo => {
    setText(todo.text);
    setEditId(todo.id);
  };

  const toggleComplete = id => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-4 sm:p-6">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-slate-800">
          Todo Manager
        </h1>

        <TodoInput
          text={text}
          setText={setText}
          handleAdd={handleAdd}
          editId={editId}
        />

        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />

      </div>
    </div>
  );
}
