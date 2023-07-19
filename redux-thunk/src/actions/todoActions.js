import axios from 'axios';

// Action Types
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';

// Action Creators
export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

// Thunk Actions
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/todos'); // Replace with your server endpoint
    dispatch(fetchTodosSuccess(response.data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (text) => async (dispatch) => {
  try {
    const response = await axios.post('/api/todos', { text }); // Replace with your server endpoint
    dispatch(addTodoSuccess(response.data));
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};
