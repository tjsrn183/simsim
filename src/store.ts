import {create} from 'zustand'

export interface Todo {
  id: number;
  text: string;
  state:boolean;
}

interface TodoState {
  todos: Todo[];
  nextId: number;
  addTodo: (todo: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  nextId: 1,
  addTodo: (todo) => set((state) => {
    const newTodo = { id: state.nextId, text: todo ,state:false};
    return {
      todos: [...state.todos, newTodo],
      nextId: state.nextId + 1
    };
  }),
  toggleTodo: (id:number) => set((state) => ({
    todos: state.todos.map(todo => todo.id === id ? { ...todo, state: !todo.state } : todo)
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}));

export default useTodoStore;