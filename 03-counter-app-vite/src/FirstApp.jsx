import PropTypes from 'prop-types';
const newMenssage ={
    mensaje: 'hola mundo',
    titlke : 'algo mas'
};

export const FirstApp = ({title, subTitle})=>{
// if(!title){
//     throw new Error('EL title no existe');
//    }
    return(
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMenssage)}</code> */}
            <p>{subTitle}</p>
        </>
    );
}

FirstApp.propTypes= {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}
// export const FirstApp = ()=>{
//     return(
//         <Fragment>
//             <h1>Arem tatiana</h1>
//             <p>Me llamo tatiana guzman</p>
//         </Fragment>
//     );
// }

// let usuario_name = 'AREM';
// const getSaludo =(nombre)=>{
//     return (`Hola ${nombre}, bienvanida a Obal`);
// }
// export const FirstApp = ()=>{

//     return(
//         <>
//             <h1>{getSaludo(`${usuario_name}`)}</h1>
//             {/* <code>{JSON.stringify(newMenssage)}</code> */}
//             <p>Me llamo tatiana guzman</p>
//         </>
//     );
// }