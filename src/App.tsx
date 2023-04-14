import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import {ActionsTypes, StateType, StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}


const App: React.FC<AppPropsType> = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navBar}/>
            <div className="app-wrapper__content">
                <Route path='/profile' render={() =>
                    <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>

    );
}

export default App;
