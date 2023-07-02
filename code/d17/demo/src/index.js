import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo1 from './components/Demo1';
import Accordion from './components/Accordion';
// import GroupAccordion from './components/GroupAccordion';
import GroupAccordion from './m2/GroupAccordion';
import Mytabs from './tabs/Mytabs';
import M3 from './m3/M3';
import OpenHour from './m4/OpenHour';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenHour />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
