import axios from 'axios';
import { API_KEY, ROOT_URL, FETCH_WEATHER, REMOVE_WEATHER } from '../constants';

export async function fetchWeather(city) {
  const url = `${ROOT_URL}&appid=${API_KEY}&q=${city}`;
  const request = await axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

export function deleteCard(id) {
  return {
    type: REMOVE_WEATHER,
    payload: id,
  };
}

