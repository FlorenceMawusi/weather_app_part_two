import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';

export default function WeatherFetch({ onScreen = () => {} }) {

    const [input, setInput] = useState('');
    const [latitude, setLaditude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [iconID, setIconID] = useState('');

    const [city, setCity] = useState('');
    const key = '7fa09c0b10b625bd744bd390dbadd6fa';
    
    
    useEffect(() => {
        alert(navigator.geolocation);
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                setLongitude(position.coords.longitude)
                setLaditude(position.coords.latitude)
            });
        }
        else{
            alert('Cannot access location')
        }
        console.log(longitude, latitude);
        fetch(
            'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+latitude+'&longitude='+longitude+'&localityLanguage=en'
        )
            .then((res) => res.json())
            .then((locationdata) => {
                console.log(locationdata);
                setCity(locationdata.city);
            })

        console.log(city);
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key+'&units=metric'
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setWeatherData(data);
                setIconID(data.weather[0].icon);

            })

    },[city, longitude, latitude])  

    function searchWeatherApi(event){
        event.preventDefault();

    }
    

    return (
        <>
            <div>
                <img src = {"http://openweathermap.org/img/wn/"+iconID+"@2x.png"} alt = ""/>
                <h3>{weatherData.city}, {weatherData.sys.country}</h3>
                <h3>Main Temperature: {weatherData.main.temp} Degrees Celcius</h3>
                <h5>Feels like {weatherData.main.feels_like} Degrees Celcius</h5>
                <h5>Weather Parameter: {weatherData.weather[0].main}</h5>
                <h6>{weatherData.weather[0].description}</h6>
                {onScreen()}
            </div>
            <br/>
            <Form>
                <Form.Group>
                    <Form.Control onChange= {(event) => setInput(event.target.value)} type="text" value = {input} placeholder="Enter your city" style = {{width : '50%'}}/>
                </Form.Group>
                <Button onClick = {(event) =>searchWeatherApi(event)} variant="primary" type="submit" >
                    Seach
                </Button>
            </Form>
        </>
    );
}
