

const Button = ({name, age, year}: {name: string, age: number, year:number}) => {
  return (
    <div>
       <h2>{name}</h2>
       <h2>{age}</h2>
       <h2>{year}</h2>
    </div>
  )
}

export default Button