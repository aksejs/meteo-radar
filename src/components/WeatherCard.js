import React, { Component } from 'react';

function WeatherCard(props) {
    return (
        <div class="weather-wrapper">
            <div class="weather-card">
                <div class="weather-icon cloud"></div>
                <h1>{props.temp.toFixed(1)}º</h1>
                <p>{props.name}</p>
                <button onClick={() => {props.onDelete(props.id)}}></button>
            </div>
        </div>
        )
}


export default WeatherCard;
