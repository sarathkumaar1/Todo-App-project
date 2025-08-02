import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from "../action/todoAction";

const initialState ={
    items: [],
    status: 'idle',
    error: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTodos.pending, (state)=>{
            state.status = "Loading";
        })
        .addCase(fetchTodos.fulfilled, (state, action)=>{
             state.status = "Succeeded";
             state.items = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) =>{
            state.status = "Rejected"; 
            state.error = action.payload;
        }).addCase(addTodo.fulfilled, (state, action) =>{
            state.items.unshift(action.payload);
        }).addCase(toggleTodo.fulfilled, (state,action)=>{
            const index = state.items.findIndex(todo => todo._id === action.payload._id);
            if(index !== -1){
                state.items[index] = action.payload;
            }
        }).addCase(deleteTodo.fulfilled,(state, action) =>{
            state.items = state.items.filter((todo) => todo._id !== action.payload);
        })
    },
})

export default todoSlice.reducer;