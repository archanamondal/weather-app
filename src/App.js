import React, {useEffect, useState} from "react";
import { FaCloud, FaCloudRain, FaCloudMeatball} from "react-icons/fa";
import { FiSearch, FiCloudLightning } from "react-icons/fi";
import {GiSunCloud} from "react-icons/gi";
import axios from 'axios';
import moment from 'moment';
import loader from "../src/assets/Spinner.gif";
import "./App.css";


function App() {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const getWeatherDetails = async (cityname) =>{
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
      setWeatherDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  const getDateAndTime = () =>{
    const day = moment.unix(weatherDetails.dt);
    return (day.get("hour")+":" + day.get("minute") + " " +day.format("dddd") + ", " +day.get("date") + " " + day.format("MMM") + " " + day.format("YY") );
  }

  const getWeatherIcon = () =>{
    switch(weatherDetails.weather[0].main){
      case "Clear":
        return(
          <FaCloud className="weather-icon"/>
        )

      case "Thunderstorm":
        return(
          <FiCloudLightning className="weather-icon"/>
        )

      case "Haze":
        return(
          <GiSunCloud className="weather-icon"/>
        )

      case "Cloudy":
        return(
          <FaCloudMeatball className="weather-icon"/>
        )

      case "Rainy":
        return(
          <FaCloudRain className="weather-icon"/>
        )

      default:
        return(
          <FaCloud className="weather-icon"/>
        )
    }
  }


  useEffect(() => {
    setLoading(true);
    getWeatherDetails("Siuri");
  }, []);


  if(loading){
    return(
      <div className="loading-box">
        <img className="loading-img" src={loader} alt="" />
      </div>
    );
  }

  return (
    <>
    <div className="background">
      <div className="content">
        <div className="title-box">
          <h3 className="title">the.weather</h3>
        </div>

        <div className="weather-box">
          <div className="temperature-box">
            <h1 className="temp-value">{weatherDetails.main.temp ?? ""}</h1>{" "}
            <h1 className="degree">
              <sup> {"\u00B0"} </sup>
            </h1>
          </div>

          <div className="city-name-box">
            <div className="location">
              <h1 className="city">{weatherDetails.name}</h1>
            </div>
            <div className="date-time-box">
              <h3 className="datetime">{getDateAndTime()}</h3>
            </div>
          </div>
          <div className="icon-box">
            {getWeatherIcon()}
          <h3 className="weather-type">{weatherDetails.weather[0].main}</h3>
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
          <p className="city-loc" onClick={()=>getWeatherDetails("darjeeling")}>Darjeeling</p>
          <p className="city-loc" onClick={()=>getWeatherDetails("durgapur")}>Durgapur</p>
          <p className="city-loc" onClick={()=>getWeatherDetails("bishnupur")}>Bishnupur</p>
          <p className="city-loc" onClick={()=>getWeatherDetails("kolkata")}>Kolkata</p>
          <p className="city-loc" onClick={()=>getWeatherDetails("malda")}>Malda</p>
          <p className="city-loc" onClick={()=>getWeatherDetails("bolpur")}>Bolpur</p>
          <p className="city-loc" onClick={()=>getWeatherDetails("siuri")}>Siuri</p>
        </div>
        <hr className="hr"/>

        <div className="weather-details">
          <h2 className="weather">Weather Details</h2>
          <div className="weather-name">
            <p className="text">Cloudy</p>
            <p className="text">{weatherDetails.clouds.all}%</p>
          </div>
          <div className="weather-name">
            <p className="text">Humidity</p>
            <p className="text">{weatherDetails.main.humidity}%</p>
          </div>
          <div className="weather-name">
            <p className="text">Wind</p>
            <p className="text">{weatherDetails.wind.speed}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
