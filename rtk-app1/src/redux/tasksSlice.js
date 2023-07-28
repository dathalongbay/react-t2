import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{

            console.log(action);
            console.log(action.payload);
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;

// lấy cache từ hệ thống trang nào đó ra 

// thêm , sửa , xóa thì sẽ update lại cache 

// cache level 1 
// cache level 2 


