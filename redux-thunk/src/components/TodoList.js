import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';

const TodoList = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodos })(TodoList);
