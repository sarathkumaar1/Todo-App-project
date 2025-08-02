import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk('fetch/todos', async () =>{
    const res = await axios.get("http://localhost:5000/api/v2/todo/get");
    return res.data.todos;
})

export const addTodo = createAsyncThunk("add/todo", async (todo) =>{
    const res = await axios.post("http://localhost:5000/api/v2/todo/add", todo);
    return res.data.createTodo;
})

export const toggleTodo = createAsyncThunk(
    'toggle/todo', 
    async({id, status}) => {
    const res = await axios.put(
        `http://localhost:5000/api/v2/todo/update/${id}`,
        {status : status}
);
        return res.data.isTodo;
});

export const deleteTodo = createAsyncThunk('delete/todo', async (id) =>{
    await axios.delete(`http://localhost:5000/api/v2/todo/delete/${id}`);
    return id;
})