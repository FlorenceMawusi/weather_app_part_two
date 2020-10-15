import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import WeatherHistory from './WeatherHistory';

export default function WeatherFetch({ onScreen = () => {}, isLoggedIn }){
  
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [newHistoryData, setNewHistoryData] = useState([]);

   
 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(
          "http://api.weatherapi.com/v1/current.json?key=bf4cb513d8204ff6818114153201410&q=" +
            position.coords.latitude +
            "," +
            position.coords.longitude +
            ""
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("fetched data -> ", data);
            setWeatherData(data);
            //setIconID(data.weather[0].icon);
          })
          .catch((err) => console.error(err));
      });
    } else {
      alert("Cannot access location");
    }
  }, []);


  function searchWeatherApi(event) {
    event.preventDefault();
    fetch(
        "http://api.weatherapi.com/v1/current.json?key=bf4cb513d8204ff6818114153201410&q=" +
          input+
          ""
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          setNewHistoryData(prev => ([...prev, data]));
          console.log('search history',newHistoryData);
        })
        .catch((err) => console.error(err));
        
    };

    




  return (
    <>
      <div>
        <img src={"" + weatherData?.current?.condition?.icon + ""} alt="" />

        <h3>{weatherData?.location?.name}, {weatherData?.location?.country}</h3>
        <h5>{weatherData?.current?.condition?.text}</h5>
        <h3>{weatherData?.current?.temp_c}°C</h3>
        <h5>Feels like {weatherData?.current?.feelslike_c}°C</h5>
        {onScreen()}
      </div>
      <br />
      <Form>
        <Form.Group>
          <Form.Control
            onChange={(event) => setInput(event.target.value)}
            type="text"
            value={input}
            placeholder="Enter your city"
            style={{ width: "50%" }}
          />
        </Form.Group>
        <Button
          onClick={(event) => searchWeatherApi(event)}
          variant="primary"
          type="submit"
        >
          Search
        </Button>
      </Form>

      {isLoggedIn === true && <WeatherHistory newHistoryData = {newHistoryData} searchWeatherApi = {searchWeatherApi}/>}
    </>
  )
}
