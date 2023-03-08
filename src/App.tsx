import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import {StateType} from "./redux/state";




type AppPropsType = {
    state: StateType
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.navBar}/>
                <div className="app-wrapper__content">
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
