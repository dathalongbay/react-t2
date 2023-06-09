import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './Demo';
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './demo4'
import Car from './components/Car'
import Motor from './components/Motor';
import Student from './components/Student';
import Room from './components/Room';
import Hanoi from './components/Hanoi';
import Arrow1 from './components/Arrow1';
import Arrow2 from './components/Arrow2';
import Arrow3 from './components/Arrow3';
import Computer from './class_components/Computer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Motor brand="Honda" model="Wave alpha" color="green" year="2021" /> */}
    {/* <Student name="Nguyễn văn anh" age="21" address="hà nội" /> */}
    {/* <Room name="Phòng chat học react" created="28-6-2023" /> */}
    {/* <Hanoi country="Việt nam" /> */}
    {/* <Arrow1 name="test1" />
    <Arrow2 name="test2" />
    <Arrow3 name="test3" /> */}

    <Computer name="máy tính dell" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
