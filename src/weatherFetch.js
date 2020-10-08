import React, {useState, useEffect} from 'react'

export default function WeatherFetch() {
    
    const key = '7fa09c0b10b625bd744bd390dbadd6fa';
    const [feels_like, setFeelsLike] = useState('');  
    const [mainTemp, setMainTemp] = useState('');  
    const [description, setDescription] = useState('');  
    const [main, setMain] = useState('');  
    const [iconID, setIconID] = useState('');
    
    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid='+key+'&units=metric'
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFeelsLike(data.main.feels_like);
                setMainTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setMain(data.weather[0].main);
                setIconID(data.weather[0].icon);
            })

    },[])  
    
    return (
        <>
            <img src = {"http://openweathermap.org/img/wn/"+iconID+"@2x.png"} alt = ""/>
            <h3>Main Temperature: {mainTemp} Degrees Celcius</h3>
            <h5>Feels like {feels_like} Degrees Celcius</h5>
            <h5>Weather Parameter: {main}</h5>
            <h6>{description}</h6>
        </>
    );
}
