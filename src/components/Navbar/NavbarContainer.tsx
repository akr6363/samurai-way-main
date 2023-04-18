import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {navBarType} from "../../redux/sidebar-reducer";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import Navbar from "./Navbar";

type MapStateReturnType = {
    navBar: navBarType
}

type mapDispatchReturnType = {

}


export type NavBarPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        navBar: state.navBar
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {

    }
}

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)