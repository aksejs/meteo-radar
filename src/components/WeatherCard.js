import React from 'react';
import 'bulma';

export default ({ id, rain, temp, name, onDelete }) => {
  const weatherIcon = (rain === 'Clear' ? 'weather-icon sun' : 'weather-icon cloud');
  return (
    <div className="weather-card">
      <div className={weatherIcon} />
      <h1>{temp.toFixed(1)}º</h1>
      <p>{name}</p>
      <button
        className="delete"
        onClick={() => onDelete(id)}
      />
    </div>
  );
};
