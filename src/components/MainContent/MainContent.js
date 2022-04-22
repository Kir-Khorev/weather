import React, { useEffect, useState } from "react";
import GetGIF from "../../services/gif-service";
import './style.css';
import fetchData from "../../services/data-service";
import currentCityByIp from "../../services/city-service";
import { useAuth0 } from '@auth0/auth0-react';

const MainContent = (props) => {
    const [state, setState] = useState('');
    const [city, setCity] = useState();
    const [gif, setGif] = useState('');
    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    const defaultCity = async () => {
        const regex = /^((?:\S+\s+){1}\S+)*/gm;
        const res = await currentCityByIp();
        res ? fetchData(res.match(regex), setState) : console.error('Error. City not found');
        return;
    }

    useEffect(() => {
        defaultCity()
        setCity(city);
    }, [city])

    // useEffect(() => {
    //     setCity(city);
    // }, [city])

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleOnChange = async (e) => {
        e.preventDefault();
        fetchData(city, setState);
        await Promise.resolve(GetGIF(state.weather[0].main).then((value) => {
            setGif(value.data.images.original.url)
        }))
        e.target.search.value = ''
    }

    return (
        <div>
            <div className="login">
                {!isLoading && !user && (
                    <button className="logBtn" onClick={() => loginWithRedirect()}>Login</button>
                )
                }
                {!isLoading && user && (
                    <button className="logBtn" onClick={() => logout()}>Log out {user.family_name} </button>
                )}
            </div>

            <form onSubmit={handleOnChange}>
                <label htmlFor="search">Search city</label>
                <input
                    onChange={handleChange}
                    value={city}
                    id="search" type="search" pattern=".*\S.*" required />
                <span className="caret" type='submit'></span>
            </form>
            <section className='main'>
                <div className="main__city">
                    <div>{state.name ? `${state.name}, ${state.sys.country}` : 0}</div>
                    <div className='date'>{state.dt ? `${new Date(state.dt * 1000).toString()}` : 0}</div>
                    <div>{state.main ? `${Math.floor(state.main.temp - 273.15)} ℃` : 0}</div>
                    <div>{state.weather ? (state.weather[0].description.charAt(0).toUpperCase() + state.weather[0].description.slice(1)) : 0}</div>
                </div>
                <div className='main__weather'>
                    <div className="main__weather-info">
                        <div>Fels Like: {state.main ? `${Math.floor(state.main.feels_like - 273.15)} ℃` : 0}</div>
                        <div>Pressure: {state.main ? state.main.pressure : 0} hPa</div>
                        <div>Humidity: {state.main ? state.main.humidity : 0} %</div>
                        <div>Wind Speed: {state.wind ? state.wind.speed : 0} m/sec</div>
                    </div>
                    <div className="gif-wrapper">
                        <img src={gif} alt={gif} className="gif" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContent;