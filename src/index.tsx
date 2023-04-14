import React from 'react';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/store";


export const rerenderEntireTRee = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}


store.subscribe(()=> {
    rerenderEntireTRee(store.getState())
})
rerenderEntireTRee(store.getState())
