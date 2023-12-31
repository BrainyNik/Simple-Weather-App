# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Description 
It allows users to search for a city and displays the current weather information for that city using the OpenWeatherMap API.

# Here's a summary of the code:

The App component is a functional component that uses React hooks like useState to manage the state of the query (city name) and the weather data received from the API.
The HandleEnter function is triggered when the user presses the Enter key in the search input field. It makes an asynchronous request to the OpenWeatherMap API using the axios library, passing the query value to retrieve weather data for the specified city. The received data is stored in the component's state using setData.
The dateBuilder function formats the current date and returns it as a string in the format "Day, Date Month, Year".
The JSX code renders the search input field, and if weather data is available, it displays the location, date, temperature, and weather type based on the received data.
The CSS classes for the App component are conditionally set based on the weather data to apply different styles depending on the temperature.
