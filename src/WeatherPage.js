// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './MyComponent'

// interface WeatherData {
//   temperature: number;
//   description: string;
//   humidity: number;
//   windSpeed: number;
//   pressure: number;
//   forecast: {
//     date: string;
//     high: number;
//     low: number;
//     description: string;
//     precipitation: number;
//   }[];
// }

// interface WeatherPageProps {
//   cityName: string;
// }

// const WeatherPage: React.FC<WeatherPageProps> = ({ cityName }) => {
//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

//   useEffect(() => {
//     const apiKey = "a8f5c1c123a8dd6feb24109356a75fae";
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a8f5c1c123a8dd6feb24109356a75fae`;

//     axios.get(url).then((response) => {
//       const data = response.data;
//       const forecast = data.forecast.slice(0, 5).map((day: any) => ({
//         date: new Date(day.dt * 1000).toLocaleDateString(),
//         high: day.main.temp_max,
//         low: day.main.temp_min,
//         description: day.weather[0].description,
//         precipitation: day.pop,
//       }));

//       setWeatherData({
//         temperature: data.main.temp,
//         description: data.weather[0].description,
//         humidity: data.main.humidity,
//         windSpeed: data.wind.speed,
//         pressure: data.main.pressure,
//         forecast,
//       });
//     });
//   }, [cityName]);

//   if (!weatherData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{weatherData.cityName}</h1>
//       <p>Temperature: {weatherData.temperature} K</p>
//       <p>Description: {weatherData.description}</p>
//       <p>Humidity: {weatherData.humidity}%</p>
//       <p>Wind Speed: {weatherData.windSpeed} m/s</p>
//       <p>Pressure: {weatherData.pressure} hPa</p>
//       <h2>Forecast</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>High</th>
//             <th>Low</th>
//             <th>Description</th>
//             <th>Precipitation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {weatherData.forecast.map((day) => (
//             <tr key={day.date}>
//               <td>{day.date}</td>
//               <td>{day.high} K</td>
//               <td>{day.low} K</td>
//               <td>{day.description}</td>
//               <td>{day.precipitation * 100}%</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WeatherPage;