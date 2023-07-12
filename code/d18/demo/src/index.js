import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Demo1 from './sample1/Demo1';
import MyForm from './sample1/MyForm';
import Register from './sample1/Register';
import Typicode from './lifecycle/Typicode';
import DemoRouter from './DemoRouter';
import Calc from './calc/Calc';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
