import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

let logger = createLogger()
let store = createStore(reducers,
    applyMiddleware(logger,thunk)
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

