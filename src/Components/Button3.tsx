import React, { ReactNode } from 'react'
import { FC } from 'react'

type User = {
    children: ReactNode;
    name : string,
    age : number,
    year: number
}



const Button3 = ({children,name,age,year} : User) => {

  return (
    <div>
        <h2>{children}</h2>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{year}</h2>
        
       
      
       
    </div>
  )
}

export default Button3