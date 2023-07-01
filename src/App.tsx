import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";

const App: React.FC<{}> = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className="app-wrapper__content">
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainer/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>
        </div>

    );
}

export default App;
