import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './HelloW';
import { FirstApp } from './FirstApp';
import './index.css';
import { CounterApp } from './CounterApp';
import { Counter2 } from './Counter2';
import { CounterNav, Btncontador } from './navbar';
// ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
//     <App/>
// </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <FirstApp title='Bienvenido' />
//     </React.StrictMode> 
// );

// TAREA 

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <CounterApp value={1233}/>
//     </React.StrictMode>
// );

//Repaso

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterNav />
        <Counter2 value={5}/>
        <Btncontador value={0} />
    </React.StrictMode>
);