import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherDetail from './components/WeatherDetail';
import Header from './components/Header';
function App() {
const [weather, setWeather] = useState(null);
const success = (pos) =>{
 
  const {
    coords: { latitude, longitude }
  }= pos;

  axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=14a008303664461bd26a233145777ce6&units=metric`
  )
  .then(({data})=> setWeather(data))
  .catch((err)=> console.log(err));
}

 
 useEffect(() => {
   navigator.geolocation.getCurrentPosition(success)
 }, [])

 
  return (
    <main className='main'>
     <Header  header={Header}/>
     <WeatherDetail  weather={weather}/>
     </main>
  )
}

export default App
