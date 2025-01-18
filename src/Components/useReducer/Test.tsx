import React, { useReducer } from 'react'

type InProps = {count: number}
const IntialState : InProps = {count: 0}

type Action = {type : "increment" } | {type : "decrement"}



const ReducerFunction = (state : InProps , action : Action): InProps =>{
    switch (action.type) {
        case "increment" : return {count : state.count + 1};
        case "decrement" : return {count: state.count - 1};
        default: return state;
    }
}

const Test = () => {

    const [state , dispatch]  = useReducer(ReducerFunction, IntialState);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type: "increment"})}>increment</button>
        <button onClick={()=>dispatch({type: "decrement"})}>decrement</button>
    </div>
  )
}

export default Test