import React from 'react';
import './App.scss';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import {NavBarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./redux/redux-store";
import {compose, Store} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {WithSuspense} from "./hoc/withSuspense";
import InDevelop from "./components/common/InDevelop/InDevelop";
import {ErrorSnackBar} from "./components/common/ErrorSnackBar/ErrorSnackBar";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<AppContainerPropsType> {

    // catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
    //     alert(event)
    // }

    componentDidMount() {
        this.props.initializeApp()
        //window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        //window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        return (
            !this.props.isInitialized
                ? <div className={'initializationPrePage'}>Wait a bit, the application is loading...</div>
                : <>
                <Switch>
                    <Route exact path={['/', '/profile/:userId?', '/dialogs/:userId?', '/news', '/users/friends', '/users/all', '/users','/settings', '/photos']} render={() => <Content isAuth={this.props.isAuth}/>}/>
                    <Route exact path='/login' render={() => <LoginContainer/>}/>
                    {/*<Route path={'/404'} render={() => <h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>*/}
                    <Route exact render={() => <h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>
                </Switch>
                    <ErrorSnackBar/>
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
                <Switch>
                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                <Route path='/dialogs/:userId?' render={WithSuspense(DialogsContainer)}/>
                <Route path='/news' render={() => <InDevelop/>}/>
                <Route path='/users/friends' render={() => <UsersContainer page={'friends'}/>}/>
                <Route path='/users/all' render={() => <UsersContainer page={'find'}/>}/>
                    <Route path='/users' render={() => <Redirect to={'/users/friends'}/>}/>
                <Route path='/settings' render={() => <InDevelop/>}/>
                <Route path='/photos' render={() => <InDevelop/>}/>

                </Switch>
            </div>
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
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store as Store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SamuraiJsApp