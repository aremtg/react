import PropTypes from 'prop-types';

export const Counter2 = ({value})=>{
    return(
    <>
        <h1>TITULIN</h1>
        <h3>{value}</h3>
    </>
    )
}
Counter2.propTypes={
    value: PropTypes.number
}
Counter2.defaultProps={
    value: 32
}