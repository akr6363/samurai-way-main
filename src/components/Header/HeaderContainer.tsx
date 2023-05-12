import React from 'react';

import {connect} from "react-redux";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<AuthContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                    return id
                }
            })
            .then((userId) => {
                return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            })
            .then(response => {
                //засетать фото
            })
    }


    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }

};


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = ({auth}: AppStateType): mapStateToPropsType => ({
    isAuth: auth.isAuth,
    login: auth.login
})

type mapDispatchToPropsType = {
    setAuthUserData(userId: number, email: string, login: string): void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    setAuthUserData
}

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);