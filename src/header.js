import React from 'react';
import { useState } from 'react';

const Header = () => {
    const [inputChange, setInputChange] = useState("")

    const onChangeFunction = (e) =>{
        setInputChange(e.target.value)
    }
  return (
    <div>
        <input type='text' placeholder='Enter your task here' onChange={onChangeFunction}/>
        <button>+</button>
        <p>{inputChange}</p>
    </div>
  )
}

export default Header