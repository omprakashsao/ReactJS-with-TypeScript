import React, { FC } from 'react'
import { ReactNode } from 'react'

type User = {
    children: ReactNode;
    name : string,
    age : number,
    year: number
}

const Button4:FC<User> = ({name, age, year, children}) => {
  return (
    <div>
        <h2>{children}</h2>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{year}</h2>
    </div>
  )
}

export default Button4