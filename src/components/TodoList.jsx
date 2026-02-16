import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleComplete, editTodo, deleteTodo }) {
   if (todos.length === 0) {
      return <p className="text-center text-slate-400">No tasks yet</p>;
   }

   return (
      <div className="space-y-4">
         {todos.map(todo => (
            <TodoItem
               key={todo.id}
               todo={todo}
               toggleComplete={toggleComplete}
               editTodo={editTodo}
               deleteTodo={deleteTodo}
            />
         ))}
      </div>
   );
}
