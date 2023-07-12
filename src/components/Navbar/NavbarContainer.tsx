import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {navBarType} from "../../redux/sidebar-reducer";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import Navbar from "./Navbar";
import {logoutTC} from "../../redux/auth-reducer";

type MapStateReturnType = {
    navBar: navBarType
}

type mapDispatchReturnType = {
    logoutTC(): void
}


export type NavBarPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        navBar: state.navBar,
    }
}

const mapDispatchToProps: mapDispatchReturnType = {
    logoutTC
}

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)