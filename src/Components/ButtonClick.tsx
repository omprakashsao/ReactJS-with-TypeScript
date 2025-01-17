

const ButtonClick = ({label, disabled, onClick}:{label: string, disabled: boolean, onClick: ()=>void}) => {

  return (
    <div>
        <h1 onClick={onClick} aria-disabled={disabled}>{label}</h1>
        
       
    </div>
  )
}

export default ButtonClick