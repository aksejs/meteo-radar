import { FETCH_WEATHER, REMOVE_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        return [...state, action.payload.data];
    case REMOVE_WEATHER:
        return state.filter(item => {
            return item.id !== action.payload
        })
    }
    return state;
}