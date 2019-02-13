import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'
import { loadState, saveState } from './localStorage';
import './index.css';
import App from './App';

const finalCreateStore = compose(applyMiddleware(ReduxPromise),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const persistedState = loadState();
const store = finalCreateStore(reducers, persistedState);

store.subscribe(() => {
  saveState({
    weather: store.getState().weather
  });
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root')
);
