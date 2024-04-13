import React from 'react';
import MyComponent, { cityName } from './MyComponent';
import WeatherApp from './WeatherApp';
import './App.css';
// export cityName from './MyComponent';

function App() {
  return (
    <div className="App">
      <WeatherApp />
      <MyComponent />
      {/* <WeatherApp /> */}
    </div>
  );
}

export default App;
