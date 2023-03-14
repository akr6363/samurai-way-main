import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTRee = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} sendMessage={sendMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}

