import { useState } from "react"


type UserInfo = {
    name: string,
    age: number,
    email: string,
}

const UserProfile = () => {

    const [ profile , setProfile ] = useState<UserInfo>({name: '', age: 0, email: ''})

    const setName = (name_value: string) => {
        setProfile({...profile, name: name_value})
    }

    const setAge = (age_value: number) => {
        setProfile({...profile, age: age_value})
    }

    const setEmail = (email_value: string) => {
        setProfile({...profile, email: email_value})
    }

  return (
    <div>
        <div>
            <label >
                Name: 
                <input type="text" value={profile.name} placeholder="your name" onChange={(e)=>setName(e.target.value)}/>
                
            </label>
        </div>
        <div>
            <label >
                Age:
                <input type="text" value={profile.age} placeholder="your age" onChange={(e)=>setAge(e.target.value)}/>
            </label>
        </div>
        <div>
            <label >
                Email:
                <input type="text" value={profile.email} placeholder="your email" onChange={(e)=>setEmail(e.target.value)}/>
            </label>
        </div>

        <h1>User Profile Details</h1>
        {
            Object.entries(profile).map(([ key , value])=>(
                <li key={Math.random()}> {key} : {value}</li>
            ))
        }

    </div>
  )
}

export default UserProfile