import { useDispatch } from 'react-redux';
import "./App.css";
import Form from './components/Form';
import Headers from './components/Headers';
import Todos from './components/Todos';
import { useEffect } from 'react';
import { fetchTodos } from './store/action/todoAction';

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{

    dispatch(fetchTodos());
  },[])
  return (
  <>
  <Headers/>
  <Form/>
  <Todos/>
  </>
  )
}

export default App;
