import React, { Component } from "react";
import "bulma";

function WeatherCard(props) {
  console.log("Rain", props.rain);
  const weathericon =
    props.rain === "Clear" ? "weather-icon sun" : "weather-icon cloud";
  return (
    <div class="weather-card">
      <div class={weathericon} />
      <h1>{props.temp.toFixed(1)}º</h1>
      <p>{props.name}</p>
      <button
        className="delete"
        onClick={() => {
          props.onDelete(props.id);
        }}
      />
    </div>
  );
}

export default WeatherCard;
