import React, { useState, useReducer } from 'react'
import useLocalStorage from './useLocalStorage';

const todoReducerHandler = (currentTodos, action) => {

    let maxId = 0;

    let localData;
    switch (action.type) {
        case "CHANGE_STATUS":
            // xử lý logic thay đổi currentTodos
            localData = currentTodos.map(todo =>
                todo.id === action.id ? { ...todo, status: !todo.status } : todo
            );

            localStorage.setItem("todos", JSON.stringify(localData));

            return localData;
        case "ADD_TODO":

            // tìm kiếm id lớn nhất trong mảng
            currentTodos.forEach(function (todo) {
                if (todo.id > maxId) {
                    maxId = todo.id;
                }
            });
            // xử lý logc thay đổi thêm 1 todo mới vào currentTodos     
            localData = [...currentTodos, { id: maxId + 1, name: action.name, status: false }];

            /* 
            JSON.parse(storedValue) : Converting a JSON Text to a JavaScript Object
            JSON.parse(storedValue) : Chuyển đổi đoạn văn bản json thành JS object {}
            JSON.stringify(value) : Chuyển ngược lại từ js object hoặc array ra JSON
            JSON đơn thuần chỉ là chuỗi được định dạng 
             */

            // không lưu mảng hay object vào localstorage mà chỉ lưu được số, chuỗi
            // chuyển đổi từ object hay array sang json 
            localStorage.setItem("todos", JSON.stringify(localData));

            return localData;

        case "UPDATE_TODO":
            // xử lý cập nhật
            localData = currentTodos.map(todo =>
                todo.id === action.id ? { ...todo, name: action.new_name } : todo
            );

            localStorage.setItem("todos", JSON.stringify(localData));

            return localData;
        case "DELETE_TODO":
            // xử lý xóa todo mong muốn
            // action.id = 3 
            // giữ lại nhưng task có id khác 3 
            localData = currentTodos.filter(todo => todo.id !== action.id);
            localStorage.setItem("todos", JSON.stringify(localData));

            return localData;
        default:
            return currentTodos;
    }
}

export const Todos = () => {
    let [initTodos, setTodos] = useLocalStorage("todos", []);
    if (initTodos !== null) {
        // convert từ chuỗi thành mảng hay object trong js 
        initTodos = JSON.parse(initTodos);
    }
    
    if (!Array.isArray(initTodos)) {
        initTodos = [];
    }

    const [todos, dispatch] = useReducer(todoReducerHandler, initTodos);
    const [newTodo, setNewTodo] = useState('');

    // const [value, setValue] = useState(0);

    const handleComplete = (todo) => {
        // gửi 1 hành động đến reducer
        dispatch({ type: "CHANGE_STATUS", id: todo.id });
    };

    const handleChange = (evt, todo) => {
        console.log({ type: "UPDATE_TODO", new_name: evt.target.value, id: todo.id });
        dispatch({ type: "UPDATE_TODO", new_name: evt.target.value, id: todo.id });
    };

    const handleAdd = () => {

        dispatch({ type: "ADD_TODO", name: newTodo });
        setNewTodo('');
    };

    const handleDelete = (todo) => {
        dispatch({ type: "DELETE_TODO", id: todo.id });
    };
    return (
        <>
            <div style={{ width: '500px', margin: '30px auto' }}>
                <h1>Todo list</h1>
                <div style={{ margin: '20px 0' }}>
                    <input name='newTask' value={newTodo} type='text' onChange={(evt) => setNewTodo(evt.target.value)} />
                    <button onClick={handleAdd}>Thêm task</button>
                </div>
                <div>
                    {todos.length > 0 && todos.map(todo => (
                        <div key={todo.id}>
                            <input type="checkbox" checked={todo.status} onChange={() => handleComplete(todo)} />
                            <span><input name={'input' + todo.id} type='text' value={todo.name} onChange={(evt) => handleChange(evt, todo)} /></span>
                            <button onClick={() => handleDelete(todo)}>Xóa task</button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

