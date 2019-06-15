import React from 'react';
import axios from "axios";

const API_KEY = "fbea9a4f65819a5be34cbc943c9e5749";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Vancouver,Canada&appid=${API_KEY}&units=metric`)
    .then((res) => {
      this.setState({
        today: res.data.list[0],
        forecast: res.data.list,
        loading: false
      })
      console.log(this.state.forecast);
    })
    .catch((e) => {
      console.error(e);
    })
  };
  render() {
  return (
        <div className="App">
          {this.state.loading
          ? <h1>Loading...</h1>
          :<div className="weather-display">
           <div className="today-weather">
             <div className="country-city">
               <h3>VANCOUVER</h3>
               <p>WEATHER</p>
             </div>
             <img className="main-img" src={`http://openweathermap.org/img/w/${this.state.today.weather[0].icon}.png`} alt="sun"/>
             <div className="today-temp">
               <h2>{this.state.today.main.temp}&deg;C</h2>
               <p>{this.state.today.weather[0].description}</p>
             </div>
           </div>
           <div className="week-weather">
            <div className="small-weather">
              <p>Mon</p>
              <img className="small-img" src={`http://openweathermap.org/img/w/01d.png`} alt="sun"/>
              <p className="high">{this.state.forecast[9].main.temp}C</p>
              <p className="low">{this.state.forecast[15].main.temp}C</p>
            </div>
            <div className="small-weather">
              <p>Tue</p>
              <img className="small-img" src={`http://openweathermap.org/img/w/01d.png`} alt="sun"/>
              <p className="high">{this.state.forecast[17].main.temp}C</p>
              <p className="low">{this.state.forecast[23].main.temp}C</p>
            </div>
            <div className="small-weather">
              <p>Wed</p>
              <img className="small-img" src={`http://openweathermap.org/img/w/${this.state.forecast[25].weather[0].icon}.png`} alt="sun"/>
              <p className="high">{this.state.forecast[27].main.temp}C</p>
              <p className="low">{this.state.forecast[31].main.temp}C</p>
            </div>
            <div className="small-weather">
              <p>Thur</p>
              <img className="small-img" src={`http://openweathermap.org/img/w/${this.state.forecast[32].weather[0].icon}.png`} alt="sun"/>
              <p className="high">{this.state.forecast[35].main.temp}C</p>
              <p className="low">{this.state.forecast[39].main.temp}C</p>
            </div>
            <div className="small-weather">
              <p>Fri</p>
              <img className="small-img" src={`http://openweathermap.org/img/w/02d.png`} alt="sun"/>
              <p className="high">{this.state.forecast[35].main.temp}C</p>
              <p className="low">{this.state.forecast[39].main.temp}C</p>
            </div>
            <div className="small-weather">
              <p>Sat</p>
              <img className="small-img" src={`http://openweathermap.org/img/w/10d.png`} alt="sun"/>
              <p className="high">{this.state.forecast[35].main.temp}C</p>
              <p className="low">{this.state.forecast[39].main.temp}C</p>
            </div>
           </div>
         </div>
          }
        </div>
      );
  }
}

export default App;
