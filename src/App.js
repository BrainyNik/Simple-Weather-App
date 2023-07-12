import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const api_key = "f06ad9ab2b36a58bf792a9eb2f58fcaa";
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(undefined);

  const HandleEnter = async (e) => {
    if (e.key === "Enter") {
      if (query.trim() !== "") {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api_key}`
          );
          setData(response.data);
        } catch (error) {
          setData(undefined);
          console.log("Network Error");
          alert("Failed to Fetch Weather Data. Please Try Again Later!");
          console.log(error.message);
        }
      } else {
        alert("Please Enter A City Name!");
      }
    }
  };

  function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} , ${year}`;
  }

  return (
    <div
      className={
        data !== undefined
          ? data.main.temp > 24
            ? "App-warm"
            : "App-cold"
          : "App"
      }
    >
      <main>
        <div className="Weather-app">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter City Name..."
              className="search-bar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={HandleEnter}
            />
          </div>

          {data !== undefined ? (
            <div className="location-box">
              <p className="location">
                {data.name},{data.sys.country}
              </p>
              <p className="date">{dateBuilder(new Date())}</p>
              <div className="temp">
                <p>{Math.floor(data.main.temp)} &deg;C</p>
              </div>
              <p className="weather-type">Clouds</p>{" "}
            </div>
          ) : (
            " "
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
