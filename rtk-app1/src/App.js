import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useSelector } from "react-redux";
const App = () => {

	const todos = useSelector((state)=>{
		return state.tasks;
	});


	return (
		<div className="app">
			<h1 className="app-title">My Tasks ({todos.length} tasks)</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;