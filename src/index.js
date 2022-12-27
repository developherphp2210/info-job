import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import InfoJobMain from './InfoJob';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainInfo from './mainInfo';

const now = new Date();
let ControlData = `${(now.getMonth() + 1)}-${now.getFullYear()}`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <InfoJobMain data={ControlData} />     */}
    <MainInfo data={ControlData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
