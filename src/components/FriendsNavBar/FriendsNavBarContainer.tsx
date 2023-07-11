import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {friendsType, navBarType} from "../../redux/sidebar-reducer";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import FriendsNavBar from "./FriendsNavBar";


type MapStateReturnType = {
    friends: Array<friendsType>
}

type mapDispatchReturnType = {

}


export type FriendsNavBarPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        friends: state.navBar.friends
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {

    }
}

export const FriendsNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsNavBar)