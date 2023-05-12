import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

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
            </div>
        </div>

    );
}

export default App;
