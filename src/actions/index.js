import axios from 'axios';

const API_KEY = '62ae10bc1379543ba4e3e719c4081082';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';

export async function fetchWeather(city) {
    const url = `${ROOT_URL}&appid=${API_KEY}&q=${city}`;
    const request = await axios.get(url);
    // console.log(request)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function deleteCard(id) {
    return {
        type: REMOVE_WEATHER,
        payload: id
    }
} 

