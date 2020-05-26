import React, {useState} from 'react';

const api = {
  key: "fd0a0766724e6100565dbde33790fc14" ,
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {

const [query,setQuery] = useState('');
const [weather,setWeather] = useState({});

const search = evt => {
  if (evt.key === "Enter") {
    fetch (`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
        console.log(result)
      })
  }
}


const dateBuilder = (d) => {
  let months = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
  let days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()]
  let year = d.getFullYear();
  return `${year} | ${month} | ${date} | ${day}`
  }
{
    return (
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search City"
          onChange={e =>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? ( 
          <div>
        <div className="location-box">
        <p className="location">{weather.name} , {weather.sys.country}</p>
        <p className="date">{dateBuilder(new Date())}</p>
        <p className="temp">{Math.round(weather.main.temp)}°C</p>
        <p className="weather">{weather.weather[0].main}</p>
        </div>
        </div>
        
        ) : ('')}

      </main>
      </div>

    );
  }
}
export default App;
