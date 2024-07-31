import { ListAtom } from "./ListAtom"
import useTodoStore from "../../../store";
export const List=()=>{

    const { todos, addTodo, removeTodo } = useTodoStore();
    return(
        <div className=" bg-white rounded-lg px-6 py-8">
            <ul>
                {todos.map((todo) => (
                    <ListAtom key={todo.id} todo={todo}/>
                ))}
            
            </ul>
           
        </div>
    )
}