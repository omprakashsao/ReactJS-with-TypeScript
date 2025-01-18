import React, { useReducer } from 'react'
import { ReducerFunction } from './TypeX'
import { State } from './TypeX'

const IntialState : State = {count: 0}

const CounterX = () => {

    const [ state , dispatch ] = useReducer(ReducerFunction, IntialState)
  return (
    <div>

        <h1>Count : {state.count}</h1>
        <button onClick={()=>dispatch({type : "increment"})}>increment</button>
        <button onClick={()=>dispatch({type : "decrement"})}>decrement</button>
    </div>
  )
}

export default CounterX