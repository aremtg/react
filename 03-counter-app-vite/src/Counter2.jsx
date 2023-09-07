import { useState } from 'react';
import PropTypes from 'prop-types';
export const Counter2 = ({value})=>{
    console.log('render');
    const [ counter, setCounter ] =  useState(value);
    const SumaEvent = ()=>{
        // setCounter(counter +1);
        setCounter((c)=> c+1);
    }
    const SecondEvent = ()=>{
        // setCounter(counter -1);
        setCounter((c)=> c-1);
    }
    const ResetEvent = ()=>{
        // setCounter(counter = 0);
        setCounter((c)=> c = value);
    }
    return(
    <>
        <h1>TITULIN</h1>
        {/* <h2>{value}</h2> */}
        <h3>{counter}</h3>
        <button onClick={SumaEvent}>+1</button>
        <button onClick={SecondEvent}>-1</button>
        <button onClick={ResetEvent}>Reset</button>
    </>
    )
}
Counter2.propTypes={
    value: PropTypes.number
}
Counter2.defaultProps={
    value:10
}