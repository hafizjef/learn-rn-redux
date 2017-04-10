import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import allReducers from './reducers'
import App from './components/App';

const logger = createLogger({predicate: (getState, action) => __DEV__});
const store = createStore(
    allReducers,
    applyMiddleware(thunk, logger)
);

const Main = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('Redux', () => Main);
