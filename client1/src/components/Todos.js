import React, { useEffect,} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { deleteTodo, toggleTodo } from '../store/action/todoAction';

const Todos = () => {
 
  const {items} = useSelector(state => state.todoReducer);
  const { status} = useSelector((state) => state.todoReducer);
 
 
  useEffect(()=> {},[])
  const dispatch =useDispatch()
  
  return (
   <>
   { status === 'Loding' && (  
   <div class="todo">
        <div class="todo_wrapper">
            <span class = "todo_content">
                {/* <input type="radio" name="status" id="status"/> */}
                <p class="todo_title">Loading</p>
            </span>
            <span class="todo_btns">
                {/* <button class="todo_action todo_edit">Edit</button>
                <button class="todo_action todo_delete">Delete</button> */}
            </span>
        </div>
    </div>
   ) }
  { items?.map((todo) => (
    <div class="todo" id={todo._id}>
        <div class="todo_wrapper">
            <span class = "todo_content">
                <input type="checkbox" name="status" id="status"
                checked={todo.status}
                onChange={() => {dispatch(toggleTodo({id: todo._id, status: !todo.status}))}}
                />
                <p class="todo_title">{todo.todo}</p>
            </span>
            <span class="todo_btns">
               
                <button class="todo_action todo_delete" 
                onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
            </span>
        </div>
    </div>
  )
     
   )}
   </>
  )
}

export default Todos