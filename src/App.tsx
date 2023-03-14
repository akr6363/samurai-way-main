import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import {StateType} from "./redux/state";




type AppPropsType = {
    state: StateType
    addPost: (newPostMessage: string) => void
    sendMessage: (newMessageText: string) => void
}


const App: React.FC<AppPropsType> = (props) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.navBar}/>
                <div className="app-wrapper__content">
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs state={props.state.dialogsPage}
                                 sendMessage={props.sendMessage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                </div>
            </div>

    );
}

export default App;
