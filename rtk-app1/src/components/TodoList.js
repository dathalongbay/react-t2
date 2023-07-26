import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";


// kích hoạt sự kiện thì dùng dispatch(slice)
// lấy dữ liệu ra thì dùng useSelector
// lấy dữ liệu ra thì dùng useSelector
// lấy dữ liệu ra thì dùng useSelector
const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;