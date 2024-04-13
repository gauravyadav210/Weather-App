# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

This code is a React application that fetches location data from an API and displays it in a table. Here's a step-by-step guide on how to run and understand this code:

Setup Environment: Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

Create React App: 
You can create a new React app using Create React App by running the following command in your terminal:

All the city data is stored in MyComponent.js file 

Understanding the Code:
The code uses React hooks such as useState, useEffect, and useRef for managing state and side effects.
It fetches data from the Open Data Soft API (https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=50) to get information about cities.
The fetched data is stored in the locations state array.
The filteredLocations state array holds the locations filtered based on the search query entered by the user.
Pagination is implemented using the page state variable, which increments when the user scrolls near the bottom of the page.
Sorting functionality is provided for the table columns. Clicking on a column header sorts the data based on that column.
The handleCityNameRightClick function opens a new tab with the weather page for the clicked city on OpenWeatherMap.
The JSX renders an input field for searching, a table with location data, and a loader element for indicating loading state.
Testing:

Open your browser and navigate to http://localhost:3000 (or another URL where your app is running) to see the application.
Try searching for locations, sorting columns, and scrolling to trigger pagination.
Customization:

You can customize the CSS styles by modifying the App.css file.
You can also modify the API endpoint or add more functionality as needed.

For to fetch weather data you have to use WeatherApp.js File
