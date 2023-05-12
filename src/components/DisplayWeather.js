import React from 'react'
import "./displayweather.css";

function DisplayWeather(props) {
    const {data} = props;
  return (
    <div className="displayweather">
        <div className = "maincard">
            <span className = "cardtitle">
                {data.name}, {data.sys.country}. Weather
            </span>
            <span className = "cardsubtitle">
                As of {new Date().toLocaleTimeString()}
            </span>
            <h1>
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
            </h1>
            
        </div>
    </div>
  )
}

export default DisplayWeather