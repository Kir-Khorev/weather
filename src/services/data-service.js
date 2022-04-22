const fetchData = async (location, stateFunc) => {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d0b5f7ed2238731eeaba5f71f14aec98`);
    if (resp.status === 200) {
        stateFunc(await resp.json());
    } else {
        alert('Oops, we cant find this city. Try again.')
    }
}

export default fetchData;