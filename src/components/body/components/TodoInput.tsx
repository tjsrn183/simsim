import React, { useState } from 'react';
import useTodoStore from '../../../store';
import { FormEvent} from 'react';
export const TodoInput = () => {
    const { addTodo } = useTodoStore();
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <form onSubmit={handleAddTodo} className="flex items-center">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="일정을 입력하세요."
                className="border-solid border-2 rounded-lg h-[50px] w-[500px]"
            />
            <button
                type="submit"
                className="bg-yellow-600 h-[50px] w-[110px] rounded-xl -translate-x-3 text-white"
            >
                Add
            </button>
        </form>
    );
};