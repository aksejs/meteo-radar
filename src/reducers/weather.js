import { handleActions } from 'redux-actions';
import { FETCH_WEATHER, REMOVE_WEATHER } from '../constants';

const defaultState = [];

export default handleActions({
  [FETCH_WEATHER]: (state, { payload: { data } }) => ([...state, data]),
  [REMOVE_WEATHER]: (state, { payload }) => state.filter(({ id }) => id !== payload),
}, defaultState);
