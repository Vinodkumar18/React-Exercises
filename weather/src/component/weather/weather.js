import React from 'react';
import "./weather.css";

class Weather extends React.Component{
    render() {
        return (
            <div className="weather-body">
                <WeatherSearch />
            </div>
        );
    }
}

class WeatherSearch extends React.Component {
    render() {
        return (
            <div className="search-city">
                <div className="input-group">
                    <input type="text" className="custom-input" placeholder="City Name" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => this.getWeatherDetails()}>Button</button>
                    </div>
                </div>
            </div>
        );
    }

    getWeatherDetails(){
        
    }
}

export default Weather;