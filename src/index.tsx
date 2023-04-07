import React from 'react';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTRee = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}


store.subscribe(rerenderEntireTRee)
rerenderEntireTRee()
