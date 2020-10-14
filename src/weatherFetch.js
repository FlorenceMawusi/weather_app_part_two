import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export default function WeatherFetch({ onScreen = () => {} }){
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState({});

   
  let history = useHistory;
  console.log("hi there",history);

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
          history.push(data);
          console.log('his ->',history);
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
    </>
  )
}
