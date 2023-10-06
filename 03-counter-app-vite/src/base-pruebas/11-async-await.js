export const getImagen = async() => {
    try {

        const apiKey = 'Vsq3zRP1Ev07QF2wI3Mi0PyNHygncHW86';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.downsized;
            return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro imagen';
    }
}

