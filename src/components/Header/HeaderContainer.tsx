import React from 'react';
import {connect} from "react-redux";
import {authTC, logoutTC, setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<AuthContainerPropsType> {

    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutTC} isLoginIn={this.props.isLoginIn}/>
        );
    }

};


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
    isLoginIn: boolean
}

const mapStateToProps = ({auth}: AppStateType): mapStateToPropsType => ({
    isAuth: auth.isAuth,
    login: auth.login,
    isLoginIn: auth.isLoginIn,
})

type mapDispatchToPropsType = {
    authTC(): void
    logoutTC(): void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    authTC, logoutTC
}

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);