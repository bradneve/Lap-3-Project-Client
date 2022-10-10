import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { questionReducer, answerReducer } from './reducers'

const store = createStore(combineReducers({
    questionReducer,
    answerReducer
  }), applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);