import React, { useEffect, useRef } from 'react';
import "./WeatherApp.css";
import MyComponent from './MyComponent'
import { useState } from "react";
// const WeatherApp = () => {

const api = {
  key: "9ef5597e15638fedc67a522dc35ba0ee",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h2>My Weather App 
        </h2>
        <h1>Please Enter Your City</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        <div>
            
            <h1>
            
            Please scroll down.....
            </h1>

        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
        
            Location Details
            <p>{weather.name}</p>
            
            Temperature Celsius 
            <p>{weather.main.temp}°C</p>
            Weather Condition
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
            Country Name
            <p>{weather.sys.country}</p>
            <p>Latitude: {weather.coord.lat}</p>
            <p>Longitude: {weather.coord.lon}</p>
          
            <p>
            Date: {new Date().toLocaleDateString()}
            
              </p>
              <p>
              Time: {new Date().toLocaleTimeString()}
            </p>
            <br />
            
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
    
  );
}

export default App;
