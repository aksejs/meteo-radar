import React,{Component} from 'react';
import './App.css';
import WeatherList from './containers/WeatherList';
import SearchWeather from './containers/SearchWeather';

class App extends Component {
  render() {
    return (
      <div>
        <SearchWeather />
        <WeatherList />
      </div>
    )
  }
}

export default App
