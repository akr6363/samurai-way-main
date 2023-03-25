import React from 'react';
import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostText, sendMessage, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTRee = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 sendMessage={sendMessage}
                 changeNewPostText={changeNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}


subscribe(rerenderEntireTRee)
rerenderEntireTRee()
