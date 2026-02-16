export default function TodoInput({ text, setText, handleAdd, editId }) {
   return (
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
         <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your task..."
            className="flex-1 border border-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />

         <button
            onClick={handleAdd}
            className="cursor-pointer w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition active:scale-95 active:shadow-inner"
         >
            {editId ? "Update" : "Add"}
         </button>
      </div>
   );
}
