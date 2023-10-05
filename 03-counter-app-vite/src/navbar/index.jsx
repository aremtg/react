
import { useState } from 'react';
import './estilos.css';
export const CounterNav = ()=>{
    return(
    <>
        <header>
            <div className="logo">
                LooKGooD
            </div>
            <nav>
                <ul>
                    <li>
                        uno
                    </li>
                    <li>
                        dos
                    </li>
                    <li>
                        tres
                    </li>
                    <li>
                        cuatro
                    </li>
                </ul>
            </nav>

            <div className="menuHamburguer">

            </div>
            <div className="salir">
                <a href="#">salir</a>
            </div>
        </header>
        <button>hi user</button>
    </>
    );
}
export function Btncontador({value}){
        const [cont, setCont] = useState(value);

        const aumentarcont =()=>{
            setCont(cont + 1);
        };
        const restarcont =()=>{
            setCont(cont - 1);
        };
        const reset =()=>{
            setCont((cont)=>cont =  value);
        };

    return(
        <div>
            <p>mira esto {cont}</p>
            <button onClick={aumentarcont}>Click</button>
            <button onClick={restarcont}>Click -</button>
            <button onClick={reset}>Click reset</button>
        </div>
    );
}