import React from 'react';
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<AuthContainerPropsType> {
    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} />
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

}

const mapDispatchToProps: mapDispatchToPropsType = {

}

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);