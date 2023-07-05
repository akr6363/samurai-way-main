import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Login} from "./Login";
import {LoginRequestType} from "../../api/api";
import React from "react";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = ({auth}: AppStateType): mapStateToPropsType => ({
    isAuth: auth.isAuth,
})

type mapDispatchToPropsType = {
    loginTC(loginData: LoginRequestType): void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    loginTC
}

export type LoginContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(Login);