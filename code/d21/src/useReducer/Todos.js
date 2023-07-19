import React, { useState,useReducer } from 'react'

/* 
tác vụ biến :
1 - hoàn thành/hoặc không hoàn thành 1 task cụ thể
2 - thêm 1 task vào danh sách việc cần làm
3 - xóa 1 task trong danh sách việc cần làm 
4 - cập nhật name của task trong danh sách 
*/
const initTodos = [
    {
        id: 1,
        name: 'đánh răng',
        status: false
    },
    {
        id: 2,
        name: 'rửa mặt',
        status: false
    },
    {
        id: 3,
        name: 'ăn sáng',
        status: false
    },
    {
        id: 4,
        name: 'đi làm',
        status: false
    }
];

const todoReducerHandler = (currentTodos, action) => {

    let maxId = 0;
    switch (action.type) {
        case "CHANGE_STATUS":
            // xử lý logic thay đổi currentTodos
            return currentTodos.map(todo =>
                todo.id === action.id ? { ...todo, status: !todo.status } : todo
            );
        case "ADD_TODO":

            // tìm kiếm id lớn nhất trong mảng
            currentTodos.forEach(function(todo) {
                if (todo.id > maxId) {
                    maxId = todo.id;
                }
            });
            // xử lý logc thay đổi thêm 1 todo mới vào currentTodos     
            return [...currentTodos, { id: maxId+1, name: action.name, status: false }];

        case "UPDATE_TODO":
            // xử lý cập nhật
            return currentTodos.map(todo =>
                todo.id === action.id ? { ...todo, name: action.new_name } : todo
            );
        case "DELETE_TODO":
            // xử lý xóa todo mong muốn
            // action.id = 3 
            // giữ lại nhưng task có id khác 3 
            return currentTodos.filter(todo => todo.id !== action.id);

        default:
            return currentTodos;
    }
}

export const Todos = () => {

    const [todos, dispatch] = useReducer(todoReducerHandler, initTodos);
    const [newTodo, setNewTodo] = useState('');

    // const [value, setValue] = useState(0);

    const handleComplete = (todo) => {
        // gửi 1 hành động đến reducer
        dispatch({ type: "CHANGE_STATUS", id: todo.id });
    };

    const handleChange = (evt, todo) => {
        console.log({ type: "UPDATE_TODO", new_name: evt.target.value, id: todo.id});
        dispatch({ type: "UPDATE_TODO", new_name: evt.target.value, id: todo.id});
    };

    const handleAdd = () => {
        
        dispatch({ type: "ADD_TODO", name: newTodo});
        setNewTodo('');
    };

    const handleDelete = (todo) => {
        dispatch({ type: "DELETE_TODO", id: todo.id});
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

