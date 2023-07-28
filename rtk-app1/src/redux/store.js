import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";

// reducer nhận hành động từ 1 componet bất kỳ
// sau đó thay đổi state = dữ liệu global 
// addTodo | editTodo | deleteTodo
export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});