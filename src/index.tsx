import React from 'react';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Store} from "redux";


export const rerenderEntireTRee = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store as Store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

store.subscribe(()=> {
    rerenderEntireTRee()
})
rerenderEntireTRee()
