import React from "react";

const Weather = ({country, weather}) => {
    return (
        <>
            <h2>Weather in {country.name.common}</h2>
            <p style={{fontSize: '20px'}}><strong>temperature:</strong> {weather.current.temperature} Celsius</p>
            <img src={weather.current.weather_icons[0]} alt="" style={{ width: '100px', height: '100px' }} alt="weather icon"/>
            <p style={{fontSize: '20px'}}><strong>wind</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </>
    )
}

export default Weather