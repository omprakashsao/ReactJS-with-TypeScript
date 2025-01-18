import { ChangeEvent, FormEvent, useState } from "react"

type User = {
    name: string,
    email: string,
}

const ContactForm = () => {

    const [ data , setData ] = useState<User>({name: '' , email: ''})

    const changeHandler = (e : ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setData({...data, [name]: value})
    }

    const submitHandler = (e : FormEvent<HTMLInputElement>) =>{
            e.preventDefault()

            console.log("data is submitted", data)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label >Name:</label>
        <input type="text" name="name" value={data.name} onChange={changeHandler} />
        <label >Email:</label>

        <input type="text" name="email" value={data.email} onChange={changeHandler} />

        <button type="submit">submit</button>
        </form>
        
    </div>
  )
}

export default ContactForm