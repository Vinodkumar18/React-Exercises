import React from 'react';
import "./weather.css";
import WebServices from './../../services/webservices';
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
    
    get cityName(){
        return this._cityName;
    }

    set cityName(value){
        this._cityName = value;
    }

    state = {
        "cityName" : "Hyderabad"
    }

    render() {
        return (
            <div className="search-city">
                <div className="input-group">
                    <input type="text" className="custom-input" placeholder="City Name" value={this.state.cityName} onChange={this.updateCityName}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => this.getWeatherDetails()}>Button</button>
                    </div>
                </div>
            </div>
        );
    }

    updateCityName = (event) => {
        this.setState({
            "cityName" : event.target.value
        });
    }

    getWeatherDetails(){
        const webServices = new WebServices();
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.cityName + "&APPID=5536f021b58776944ade38cabdf28b46";
        let fetchRequest = webServices.get(url, {});
        fetchRequest.then((response) => {
            console.log(response);
        });
    }
}

export default Weather;