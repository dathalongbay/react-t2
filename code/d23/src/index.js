import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { Todos } from './localstorage/Todos';
import { Todos } from './useLocalStorage/Todos';
import SomePage from './hoc';
import DemoRouter from './authen/DemoRouter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
