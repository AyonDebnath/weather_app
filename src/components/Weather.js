import React, { useState } from "react";
import "./weather.css";

function Weather() {
    const APIKEY = "8ea55f50121ce0836f9e53f9a5ff7dc7";

    const [form, setForm] = useState({
        city:"", 
        country:""
    })

    async function weatherData(e) {
        e.preventDefault();
        if(form.city == "") {
            alert("Add values");
        }
        else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
            .then((res) => console.log(res.json()));
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        if(name == "city") {
            setForm({...form, city:value})
        }
        if(name == "country") {
            setForm({...form, country:value})
        }
        console.log(form.city, form.country)
    }
    return (
        <div className = "weather">
            <span className = "title"> Weather App </span>
            <br/>
        <form>
            <input type = "text" name = "city" placeholder="city" onChange={e => handleChange(e)}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type = "text" name = "country" placeholder="country" onChange={e => handleChange(e)}/>
            <button className="getweather" onClick = {e => weatherData(e)}>Submit</button>
        </form>
        </div>
    )

    
}

export default Weather