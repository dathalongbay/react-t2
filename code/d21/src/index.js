import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Component1 } from './useContext/Component1';
import { Ref1 } from './useRef/Ref1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ref1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
