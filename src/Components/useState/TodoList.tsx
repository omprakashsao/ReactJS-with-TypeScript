import { useState } from "react"

type Todo = {
    id: number,
    task: string,
    completed: boolean,
}
const TodoList = () => {
    const [Todos, setTodos] = useState<Todo[]>([])
    const [input , setInput] = useState<string>('')

    const clickHandler = ()=>{
        setTodos(()=>{
            const newTodo: Todo = {
                id : Math.random(),
                task: input,
                completed: false
            }

            return [...Todos, newTodo]
        })
    }

    const removeTodo = (id : number) =>{
        setTodos(Todos.filter(t=>t.id !==id))
    }

  return (
    <div>
        <input type="text" value={input} placeholder="new Todo" onChange={(e)=>setInput(e.target.value)} />
        <button onClick={clickHandler}>add todo</button>

       <div>
        <h1>Todo List </h1>
        {
            Todos.map(({id,task, completed})=>(
                <ul key={id}>
                    <li>
                        <span>{task}</span><button onClick={()=>removeTodo(id)}>x</button>
                    </li>
                    
                </ul>
            ))
        }
       </div>
        
    </div>
  )
}

export default TodoList