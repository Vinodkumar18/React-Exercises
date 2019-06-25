import React from 'react';
import "./weather.css";
import Webservices from "../../services/webservices";

export default  class Weather extends React.Component{
    render() {
        return (
            <div className="weather-body">
                <WeatherSearch />
            </div>
        );
    }
}

class WeatherSearch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "city" : "Hyderabad",
            "weatherDetails" : {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.getWeatherDetails = this.getWeatherDetails.bind(this);
    }

    handleChange(event){
        this.setState({
            "city" : event.target.value
        })
    }

    render() {
        return (
            <div className="weather-section">
                <div className="search-city">
                    <div className="input-group">
                        <input type="text" className="custom-input" value={this.state.city} placeholder="City Name" onChange={this.handleChange} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.getWeatherDetails}>Button</button>
                        </div>
                    </div>
                </div>
                <div className="weather-details">
                    <Temperature details={this.state.weatherDetails.main}/>
                </div>
            </div>
        );
    }

    getWeatherDetails(){
        let webservices = new Webservices();
        let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q={city-name}&APPID=5536f021b58776944ade38cabdf28b46&units=metric";
        requestUrl = requestUrl.replace("{city-name}", this.state.city);
        let requestObj = {
            "method" : "GET",
            "url" : requestUrl
        };
        var that = this;
        webservices.get(requestObj).then(function(response){
            that.setState({
                "weatherDetails" : response
            });
        });
    }
}

class Temperature extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "properties" : props.details
        };
    }
    render() {
        return (
            <div className="temp-body">
                <div className="temp-desc"></div>
                <div className="temp-details">
                    <div className="temp-current"></div>
                    <div className="temp-min-max">
                        <div className="temp-max"></div>
                        <div className="temp-max-min-seperator"></div>
                        <div className="temp-min"></div>
                    </div>
                </div>
            </div>
        );
    }
}