import { useState } from 'react';
import "./styles/WeatherDetail.css";

const WeatherDetail = ({ weather }) => {
  console.log(weather);
  const [isCelsius, setIsCelsius] = useState(true);

  const convertToFahrenheit = (celsius) => {
    return ((celsius * 9 / 5) + 32).toFixed();
  };

  const handleChangeTemperatures = () => {
    setIsCelsius(!isCelsius);
  };

  const temperatureInCelsius = parseFloat(weather?.main.temp).toFixed();
  const temperature = isCelsius
    ? temperatureInCelsius
    : convertToFahrenheit(temperatureInCelsius);

  const weatherIcon = weather?.weather[0].icon;
  const iconComponent = iconImg[weatherIcon] || null;

  return (
    <article>
      <section className="maini">
        {iconComponent}
        <h2 className="Grados">{temperature}°{isCelsius ? 'C' : 'F'}</h2>
        <h5 className="Viento">WIND: {weather?.wind.speed} m/s</h5>
        <h5 className="Clouds">HUMIDITY: {weather?.main.humidity} %</h5>
        <h5 className="Presion">PRESION: {weather?.main.pressure} hPa</h5>
        <h2 className="city">{weather?.name}, {weather?.sys.country}</h2>
        <h2 className="climaxState">{weather?.weather[0].description}</h2>
      </section>
      <div>
        <img className="card_oscura" src="\img\card-oscuro.png" alt="" />
      </div>

      <button className="bt_f" onClick={handleChangeTemperatures}>
        Cambiar a {isCelsius ? 'F°' : 'C°'}
      </button>
    </article>
  );
};

const iconImg = {
    "01d":<img className="img___cambiante" src="\img\icons\soleado.png" alt=""/>,
    "02d":<img className="img___cambiante" src="\img\icons\algunanubes.png" alt=""/>,
    "03d":<img className="img___cambiante" src="\img\icons\vercloudy.png" alt=""/>,
    "04d":<img className="img___cambiante" src="\img\icons\brokencloud.png" alt=""/>,
    "09d":<img className="img___cambiante" src="\img\icons\showersun.png" alt=""/>,
    "10d":<img className="img___cambiante" src="\img\icons\lloviendo.png" alt=""/>,
    "11d":<img className="img___cambiante" src="\img\icons\tormenta.png" alt=""/>,
    "13d":<img className="img___cambiante" src="\img\icons\snow.png" alt=""/>,
    "50d":<img className="img___cambiante" src="\img\icons\within.png" alt=""/>,
    
    "01n":<img className="img___cambiante" src="\img\icons\luna.png" alt=""/>,
    "02n":<img className="img___cambiante" src="\img\icons\algunanubem.png" alt=""/>,
    "03n":<img className="img___cambiante" src="\img\icons\vercloudy" alt=""/>,
    "04n":<img className="img___cambiante" src="\img\icons\brokencloud.png" alt=""/>,
    "09n":<img className="img___cambiante" src="\img\icons\showermoon.png" alt=""/>,
    "10n":<img className="img___cambiante" src="\img\icons\lloviendo.png" alt=""/>,
    "11n":<img className="img___cambiante" src="\img\icons\tormenta.png" alt=""/>,
    "13n":<img className="img___cambiante" src="\img\icons\snow.png" alt=""/>,
    "50n":<img className="img___cambiante" src="\img\icons\within.png" alt=""/>,
    
    
};

export default WeatherDetail;
