import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/action/todoAction';

const Form = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    todo: "",
  });
  const onInputChange =(e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitTodo = ( e ) =>{
      e.preventDefault();
      dispatch(addTodo(todo));
      setTodo({
        todo: "",
      });
  };
  return <form action = "#" class="form" onSubmit={(e) => onSubmitTodo(e)}>
    <div class="form_group">
        <input 
        name="todo"
        type= "text" 
        class="form_control" 
        placeholder='Add you todo...'
        onChange={(e) => onInputChange(e)}
        value={todo.todo}
      />

    </div>
    <div class="form_group">
        <button class="form_control form_btn">+ Add Todo</button>
    </div>
  </form> 
  
}

export default Form