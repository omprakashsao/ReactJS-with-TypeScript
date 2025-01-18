import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'

type ContextProps = {
    count: number,
    increment: ()=>void,
    decrement: ()=>void,
    
}
export const Context = createContext<ContextProps>({count: 0, increment:()=>{}, decrement: ()=>{}});

type Ch = {
    children : ReactNode
}

const Sender = ({children} : Ch) => {

    const [ count , setCount ] = useState<number>(0)
    
    const increment = () =>{
        setCount(count +1)
    }

    const decrement = () => {
        setCount(count -1)
    }

  return (
    <div>
               <Context.Provider value={{count, increment, decrement}}>
                    {children}
               </Context.Provider>
    </div>
  )
}

export default Sender