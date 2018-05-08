import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchWeather, deleteCard} from '../actions';
import WeatherCard from '../components/WeatherCard';

class WeatherList extends Component {


    componentDidMount() {
        this.props.fetchWeather("Paris");
    }

    renderCards() {
        return this.props.weather.map(item => (
            <WeatherCard 
                key={item.id}
                id={item.id}
                name={item.name} 
                temp={item.main.temp} 
                onDelete={this.onCardDelete} 
                rain={item.weather["0"].main}/>
        ))

        
    }

    onCardDelete = id => {
        this.props.deleteCard(id);
    }

    render() {
        console.log(this.props)
        
        return (
        <div className="weather-wrapper">
            {this.renderCards()}
        </div>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps, {fetchWeather, deleteCard})(WeatherList);
