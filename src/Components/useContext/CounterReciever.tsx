import { useContext } from "react"
import { Context } from "./Sender"


const CounterReciever  = () => {
    const {count , increment, decrement} = useContext(Context)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default CounterReciever