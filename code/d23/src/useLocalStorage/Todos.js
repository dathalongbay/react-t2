import React, { useState, useReducer } from 'react'
import useLocalStorage from './useLocalStorage';

export const Todos = () => {

    let maxId = 0;

    let localData;

    // return [value, setValue];
    const [todos, setTodos] = useLocalStorage('todos', [])
    const [newTodo, setNewTodo] = useState('');

    const handleComplete = (todoItem) => {

        localData = todos.map(todo =>
            todo.id === todoItem.id ? { ...todo, status: !todo.status } : todo
        );
        setTodos(localData);
    };

    const handleChange = (evt, todoItem) => {
        localData = todos.map(todo =>
            todo.id === todoItem.id ? { ...todo, name: todoItem.new_name } : todo
        );
        setTodos(localData);
    };

    const handleAdd = () => {

        console.log({todos});

        todos.forEach(function (todo) {
            if (todo.id > maxId) {
                maxId = todo.id;
            }
        });
        console.log({maxId});
        localData = [...todos, { id: maxId + 1, name: newTodo, status: false }];
        setTodos(localData);
        setNewTodo('');
    };

    const handleDelete = (todoItem) => {
        localData = todos.filter(todo => todo.id !== todoItem.id);
        setTodos(localData);
    };
    return (
        <>
            <div style={{ width: '500px', margin: '30px auto' }}>
                <h1>Todo list sử dụng custom hook không dùng reducer nữa</h1>
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

