import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Collapsible from './components/collapsible';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Collapsible title="demo collap">
      <p style={{color:'red'}}>hơ văn yêu nước Nguyễn Đình Chiểu không chỉ xứng đáng sáng tỏ hơn nữa trong thời ấy mà còn trong thời hiện đại vì:
      <br />
      - Tấm gương cuộc đời và sức lay động, tính chiến đấu trong thơ văn yêu nước của ông có ý nghĩa quan trọng đối với công cuộc diệt trừ bè lũ cướp nước và bán nước đương thời (chống Pháp)
      <br />
      - Nâng cao tinh thần yêu nước thời hiện đại.
      </p>
    </Collapsible>
    <Collapsible title="demo collap"><p style={{color:'red'}}>dfsdkfdfkdfksdf sdf</p></Collapsible>
    <Collapsible title="demo collap"><p style={{color:'red'}}>dfsdkfdfkdfksdf sdf</p></Collapsible>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
