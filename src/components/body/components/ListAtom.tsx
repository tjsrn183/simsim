import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { Todo } from '../../../store';
import useTodoStore from '../../../store';
import classNames from 'classnames';
export const ListAtom = ({ todo }: { todo: Todo }) => {
  const { removeTodo,toggleTodo } = useTodoStore();
  
  return (
    <div className="bg-gray-300 h-[50px] rounded-3xl my-3">
      <span className="text-gray-800 justify-between flex px-3 items-center translate-y-1">
        <div onClick={() => toggleTodo(todo.id)} className='w-7 h-7 rounded-full border border-yellow-600 flex items-center justify-center'>
          {todo.state&&<MdDone className="inline-block" color='gray'/>}
        </div>
        <span className={classNames(" font-extrabold text-3xl",{'line-through':todo.state})}>  
        {todo.text}
        </span>
        <button onClick={() => removeTodo(todo.id)}>
          <MdDelete className="inline-block" size={30} />
        </button>
      </span>
    </div>
  );
}