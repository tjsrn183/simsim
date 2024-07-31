import React, { useState } from 'react';
import useTodoStore from '../../../store';
export const TodoInput=() => {
    const { todos, addTodo, removeTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState<string>('');
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };
    return (
        <div className=" flex items-center">
            <input type="text" value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo" className=" border-solid border-2 rounded-lg h-[50px] w-[500px]"/>
            <button  onClick={handleAddTodo}className=" bg-yellow-600 h-[50px] w-[110px] rounded-xl -translate-x-3 text-white">Add</button>
        </div>
    )
}