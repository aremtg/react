import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './HelloW';
import { FirstApp } from './FirstApp';
import './index.css';
// ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
//     <App/>
// </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Bienvenido a Obal' subTitle='Arem ya eres parte de la familia'/>
    </React.StrictMode> 
);