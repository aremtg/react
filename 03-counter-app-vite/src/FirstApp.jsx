import PropTypes from 'prop-types';
const newMenssage ={
    mensaje: 'hola mundo',
    titlke : 'algo mas'
};

export const FirstApp = ({title, subTitle, name})=>{
// if(!title){
//     throw new Error('EL title no existe');
//    }
    return(
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMenssage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
}

FirstApp.propTypes= {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}
FirstApp.defaultProps={
    title: '¿Quieres ser parte de la familia Obal?',
    subTitle: 'no hay subtitulo',
    name: 'abmrasjd',
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
// ---------------------------------
