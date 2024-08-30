import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'


const WeatherApp =  () => {

   const [wicon,Setwicon] = useState(cloud_icon);


   let api_key = "480c122e91192f60c362e69b14da547c";

  const Search = async () => {
    let inputTxt  = document.getElementsByClassName('inputbox');
    if(inputTxt[0].value === "") {
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputTxt[0].value}&appid=${api_key}`
    let response  = await fetch(url);
    let data = await response.json();

    let humidity = document.getElementsByClassName("humidity");
    let wind = document.getElementsByClassName("wind");
    let weather_temp = document.getElementsByClassName("weather_temp");
    let weather_location = document.getElementsByClassName("weather_location");

    humidity[0].innerHTML = data.main.humidity+ "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " Km/h";
    weather_temp[0].innerHTML = Math.floor(data.main.temp -273.5) + "°C";
    weather_location[0].innerHTML = data.name;


   if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
    Setwicon(clear_icon);
   }
   else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
    Setwicon(cloud_icon);
   }
   else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
    Setwicon(drizzle_icon);
   }
   else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
    Setwicon(drizzle_icon);
   }
   else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
    Setwicon(rain_icon);
   }
   else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
    Setwicon(rain_icon);
   }
   else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
    Setwicon(snow_icon);
   }
   else {
    Setwicon(clear_icon)
   }
  }
  
  return (
    <div className='container'>
       <div className="top_bar">
        <input type="text" placeholder='Search' className='inputbox' />
        <div className="searchbox">
            <img src={search_icon} alt="search"  onClick={Search}/>
        </div>
        </div>
        <div className="weather_img">
            <img src={wicon} alt="" />
            </div> 
            <div className="weather_temp">0°C</div>
            <div className="weather_location"></div>
            <div className="weather_container">
                <div className="element">
                    <img src={humidity_icon} alt="icon" />
                    <div className="data">
                        <div className="humidity">0</div>
                        <div className="txt">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="icon" />
                    <div className="data">
                        <div className="wind">0</div>
                        <div className="txt">Wind</div>
                    </div>
                </div>
                </div>    
    </div>
  )
}

export default WeatherApp
