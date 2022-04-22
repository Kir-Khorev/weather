const GetGIF = async function (value) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=96dOgyBB8JEOXqFOTV1kBdosZRXYIveI&s=${value}`, {
            mode: 'cors'
        });
        const dataGif = await response.json();
        return dataGif;
    }
    catch (err) {
        const errGif = 'https://thumbs.gfycat.com/BewitchedShamefulDobermanpinscher-max-14mb.gif';
        console.log(`Ooops this is error: ${err}`);
        return errGif;
    }
}

export default GetGIF;