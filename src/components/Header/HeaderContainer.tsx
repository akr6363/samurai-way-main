import React from 'react';
import {connect} from "react-redux";
import {authTC, logoutTC, setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<AuthContainerPropsType> {



    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutTC}/>
        );
    }

};


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = ({auth}: AppStateType): mapStateToPropsType => ({
    isAuth: auth.isAuth,
    login: auth.login,
})

type mapDispatchToPropsType = {
    logoutTC(): void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    logoutTC
}

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);