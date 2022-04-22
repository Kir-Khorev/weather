function currentCityByIp() {
    const key = '5a521be7d4fa4d2bbc958e39052fe3d3';
    return fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${key}`, {
        method: 'GET'
    })
        .then(function (response) { return response.json(); })
        .then(function (json) {
            console.log(json.city.name);
            return json.city.name
        })
        .catch((err) => console.log(err))
 
}
export default currentCityByIp;