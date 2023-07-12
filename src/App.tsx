import React from 'react';
import './App.scss';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import {NavBarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./redux/redux-store";
import {compose, Store} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {WithSuspense} from "./hoc/withSuspense";
import styles from "./components/Navbar/Navbar.module.scss";
import NavDialogsItem from "./components/Dialogs/navDialogs/navDialogsItem/NavDialogsItem";
import {friendsType} from "./redux/sidebar-reducer";
import FriendsNavBarContainer from "./components/Dialogs/navDialogs/NavDialogsContainer";


// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        return (
            !this.props.isInitialized
                ? <div>Загрузка...</div>
                : <>
                    <Route exact path={['/', '/profile/:userId?', '/dialogs/:userId?', '/news', '/users/friends', '/users/all']} render={() => <Content isAuth={this.props.isAuth}/>}/>
                    <Route exact path='/login' render={() => <LoginContainer/>}/>
                </>
        );
    }
}

type ContentPropsType = {
    isAuth: boolean
}

const Content: React.FC<ContentPropsType> = ({isAuth}) => {



    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }


    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className={'container'}>
            <NavBarContainer/>
            <div className="app-wrapper__content">
                <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                <Route path='/dialogs/:userId?' render={WithSuspense(DialogsContainer)}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/users/friends' render={() => <UsersContainer page={'friends'}/>}/>
                <Route path='/users/all' render={() => <UsersContainer page={'find'}/>}/>
            </div>
                {/*<Route path={[ '/dialogs/:userId?', '/news']} render={()=> <FriendsNavBarContainer/>}/>*/}
                {/*<FriendsNavBarContainer/>*/}
            </div>
        </div>

    )
}


type mapStateToPropsType = {
    isInitialized: boolean
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth,
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