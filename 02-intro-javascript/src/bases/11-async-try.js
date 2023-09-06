// const getImagenPromesa = ()=>{
//     return new Promise((resolve) => {
//         resolve('https://tatiana.com')
//     })
// }

// getImagenPromesa().then(console.log);

// mas facil

// const getImage = async()=>{
    
//     const apiKey = 'Vsq3zRP1Ev07QF2wI3Mi0PNHygncHW86';
//     const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//     const {data} = await peticion.json();
    
//     // console.log(data)

//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src= url;
//     document.body.append(img)
// }
// getImage().catch(console.warn);

// const apiKey = 'Vsq3zRP1Ev07QF2wI3Mi0PNHygncHW86';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// // promesas en cadena

// peticion.then(resp => resp.json())
// .then( ({data})=> {
//     const {url} = data.images.original;
//     // console.log(data.images.original.url)
//     // console.log(url)

//     const img = document.createElement('img');
//     img.src= url;
//     document.body.append(img);
// })
// .catch(console.warn)

const getImage = async()=>{
    try {
    const apiKey = 'Vsq3zRP1Ev07QF2wI3Mi0PNHygncHW86';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src= url;

    document.body.append(img);  
    } catch (error) {
        console.log(error)
    }
   

}
getImage()
