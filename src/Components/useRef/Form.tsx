import { FormEvent, useRef, useState } from "react"

type User = {
    name: string,
    email: string,
    age: number,
}
const Form = () => {

    const [ data, setData ] = useState<User>({name: '', email: '' , age: 0})

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null)
    const age = useRef<HTMLInputElement>(null)

    const handleSumbit  = (event : FormEvent<HTMLInputElement>) =>{
         
        event.preventDefault();

        const name1 = name.current!.value;
        const email1 = email.current!.value;
        const age1 = age.current!.value;

        setData({name: name1, email: email1, age: +age1})
    }

    return (
    <div>
        <form onSubmit={handleSumbit}>

        <input type="text" ref={name} placeholder="Enter your name"  />
        <input type="text" ref={email} placeholder="Enter your email"  />
        <input type="text" ref={age} placeholder="Enter your age"  />

        <button type="submit">submit</button>
        
        </form>

        <h1>Form information</h1>
        {
            Object.entries(data).map(([key , value])=>(
                <li key={Math.random()}> {key} : {value}</li>
            ))
        }
    </div>
  )
}

export default Form