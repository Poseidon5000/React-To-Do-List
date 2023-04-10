import React, { useState} from 'react'

const Todo = () => {
        const [inputValue, setInputValue] = useState("");
        const [todos, setTodos] = useState([]);


        const InputChange = (e) =>{
          setInputValue(e.target.value)
        }

        const formSubmit = (e) =>{
          e.preventDefault();
          if(inputValue.trim() == "")return;
          setTodos([...todos, {
            id: Date.now(),
            text: inputValue
          }])
          setInputValue("")
        }

    
      return (
        <>
          <form onSubmit={formSubmit}>
        <input type='text' 
        placeholder='Enter your task here'
        value={inputValue}
        onChange={InputChange} />
        <button>+</button>
          </form>


          <ul>
            {todos.map((todo)=>(
              <li key = {todo.id}>{todo.text}</li>
            ))}
          </ul>
          
        </>
      )
    
}

export default Todo