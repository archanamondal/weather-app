import React from "react";
import { FaCloud } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="content">
        <div className="title-box">
          <h3 className="title">the.weather</h3>
        </div>

        <div className="weather-box">
          <div className="temperature-box">
            <h1 className="temp-value">16</h1>{" "}
            <h1 className="degree">
              <sup> {"\u00B0"} </sup>
            </h1>
          </div>

          <div className="city-name-box">
            <div className="location">
              <h1 className="city">Kolkata</h1>
            </div>
            <div className="date-time-box">
              <h3 className="datetime">06:09 - Monday, 23 sep 19</h3>
            </div>
          </div>
          <div className="icon-box">
            <FaCloud className="weather-icon"/>
          <h3 className="weather-type">Cloudy</h3>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div className="search-box">
          <input className="searchbar" type="Enter city name" />
          <button className="btn">
            <FiSearch className="search-icon"/>
          </button>
        </div>

        <div className="city-list">
        <h2 className="another-location">Another Location</h2>
        <hr/>
          <p className="city-loc">Durgapur</p>
          <p className="city-loc">Suri</p>
          <p className="city-loc">Durgapur</p>
          <p className="city-loc">Durgapur</p>
          <p className="city-loc">Durgapur</p>
        </div>
        <hr className="hr"/>
        <div className="weather-details">
          <h2 className="weather">Weather Details</h2>
          <div className="weather-name">
            <p className="text">Cloudy</p>
            <p className="text">86%</p>
          </div>
          <div className="weather-name">
            <p className="text">Humidity</p>
            <p className="text">76%</p>
          </div>
          <div className="weather-name">
            <p className="text">Wind</p>
            <p className="text">80%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
