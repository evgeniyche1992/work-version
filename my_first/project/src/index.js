import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App store={store} />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,// Оборачивается для дальнейшего использования при маршрутизации
    document.getElementById('root'));

