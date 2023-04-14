import React from 'react';
import {StateType, store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

export const rerenderEntireTRee = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

store.subscribe(()=> {
    rerenderEntireTRee(store.getState())
})
rerenderEntireTRee(store.getState())
