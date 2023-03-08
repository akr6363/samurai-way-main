import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import {PostsType} from "./index";


export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


type AppPropsType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
    postsData: Array<PostsType>
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Route path='/profile' render={() => <Profile
                        postsData={props.postsData}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsData={props.dialogsData}
                        messageData={props.messageData}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
