import React from 'react'
import './WeatherCard.css'

export default function WeatherCard({ name, sys, main, weather, wind,visibility }) {
    return (
        <div>

            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">Weather</h2>
                        <span className="date-day">
                            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span><i className="location-icon" data-feather="map-pin"></i><span className="location">
                            {name} {sys.country}
                        </span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">{Math.floor(main.temp - 273.15)} °C</h1>
                        <h4>
                        Hight/Low {" - "}
                            {Math.floor(main.temp_max - 273.15)}
                            / {" "}
                            {Math.floor(main.temp_max - 273.15)} °C
                        </h4>

                        <h3 className="weather-desc">{weather[0].main} ({weather[0].description})</h3>
                    </div>
                </div>
                <div style={{
                    width: '350px'
                }} className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">PRESSURE</span><span className="value">{main.pressure} hPa</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{main.humidity} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">WIND</span><span className="value">{Math.floor((wind.speed * 18) / 5)} km/h</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">VISIBILITY</span><span className="value">{visibility / 1000} km</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container"></div>

                </div>
            </div>
        </div>
    )
}
