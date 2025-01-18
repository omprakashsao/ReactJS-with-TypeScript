import React from 'react'

const EventHandling = () => {

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log('button clicked', e.currentTarget);
    }


  return (
    <div onMouseEnter={(e: React.MouseEvent<HTMLDivElement>)=> console.log('mouse entered!', e.currentTarget)}>
        <h1>Event Handling</h1>
        <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default EventHandling