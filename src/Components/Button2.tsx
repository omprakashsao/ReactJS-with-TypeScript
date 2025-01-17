import React from 'react'

// type StudentInfo = {
//     name: string,
//     age: number,
//     year: number
// }

interface StudentInfo {
  name: string,
  age: number,
  year: number
}

const Button2 = ({name , age , year} : StudentInfo) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{year}</h2>
    </div>
  )
}

export default Button2