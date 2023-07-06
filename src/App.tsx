import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./redux/redux-store";
import {compose, Store} from "redux";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        return (
            !this.props.isInitialized
                ? <div>Загрузка...</div>
                : <div className="app-wrapper">
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
}

type mapStateToPropsType = {
    isInitialized: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isInitialized: state.app.isInitialized
})

type mapDispatchToPropsType = {
    initializeApp(): void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    initializeApp
}
export type AppContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(App)

const SamuraiJsApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store as Store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJsApp