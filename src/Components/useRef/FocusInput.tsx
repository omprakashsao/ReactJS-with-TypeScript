import { useRef, useState } from "react"

const FocusInput = () => {

    const [ input , setInput ] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    const clickHandler = () =>{
        inputRef.current?.focus();
    }
  return (
    <div>
        <input type="text" value={input} ref={inputRef} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={clickHandler}>focus</button>
         
    </div>
  )
}

export default FocusInput