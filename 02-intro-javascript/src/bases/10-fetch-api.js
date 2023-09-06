const apiKey = 'Vsq3zRP1Ev07QF2wI3Mi0PNHygncHW86';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// promesas en cadena

peticion.then(resp => resp.json())
.then( ({data})=> {
    const {url} = data.images.original;
    // console.log(data.images.original.url)
    // console.log(url)

    const img = document.createElement('img');
    img.src= url;
    document.body.append(img);
})
.catch(console.warn)