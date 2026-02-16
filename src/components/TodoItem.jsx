export default function TodoItem({ todo, toggleComplete, editTodo, deleteTodo }) {
   return (
      <div
         className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl shadow-sm transition
        ${todo.completed ? "bg-green-500 text-white" : "bg-slate-100"}`}
      >
         <div className="flex items-center gap-3">
            <input
               type="checkbox"
               className="cursor-pointer "
               checked={todo.completed}
               onChange={() => toggleComplete(todo.id)}
            />

            <span className={`text-sm sm:text-base ${todo.completed ? "line-through" : ""}`}>
               {todo.text}
            </span>
         </div>

         <div className="flex gap-2 sm:ml-auto">
            <button
               onClick={() => editTodo(todo)}
               className="cursor-pointer px-3 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-400 transition active:scale-95 active:shadow-inner"
            >
               Edit
            </button>

            <button
               onClick={() => deleteTodo(todo.id)}
               className="cursor-pointer px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-400 transition active:scale-95 active:shadow-inner"
            >
               Delete
            </button>
         </div>
      </div>
   );
}
