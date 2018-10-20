import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather, deleteCard } from '../actions';

class WeatherList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWeather('Paris'));
  }

    onCardDelete = (id) => {
      this.props.dispatch(deleteCard(id));
    };

    renderCards() {
      const { weather } = this.props;
      console.log(weather);
      return weather.length && weather.map(({
        id, name, main: { temp }, weather,
      }) => (
        <WeatherCard
          key={id}
          id={id}
          name={name}
          temp={temp}
          onDelete={this.onCardDelete}
          rain={weather['0'].main}
        />
      ));
    }

    render() {
      console.log(this.props);
      return (
        <div className="weather-wrapper">
          {this.renderCards()}
        </div>
      );
    }
}

export default connect(({ weather }) => ({
  weather,
}))(WeatherList);
