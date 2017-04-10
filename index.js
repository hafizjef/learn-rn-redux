import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import allReducers from './reducers'
import App from './components/App';


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, logger)
);

const Main = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default Main