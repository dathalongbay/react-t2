import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
