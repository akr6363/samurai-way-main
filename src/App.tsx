import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
 import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


// type AppPropsType = {
//     state: StateType
//     dispatch: (action: ActionsTypes) => void
//     store: StoreType
// }


const App: React.FC<{}> = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBarContainer/>
            <div className="app-wrapper__content">
                <Route path='/profile' render={() =>
                    <Profile/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
