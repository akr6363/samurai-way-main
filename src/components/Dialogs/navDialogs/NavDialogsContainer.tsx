import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../../redux/redux-store";
import NavDialogs from "./NavDialogs";
import {DialogsType, requestDialogs} from "../../../redux/dialogs-reducer";


type MapStateReturnType = {
    friends: DialogsType[]
}

type mapDispatchReturnType = {
    requestDialogs(currentPage: number, pageSize: number, friend?: boolean, term?: string): void
}

export type FriendsNavBarPropsType = MapStateReturnType & mapDispatchReturnType

class NavDialogsContainer extends React.Component<FriendsNavBarPropsType> {

    componentDidMount() {
        this.props.requestDialogs(1, 100, true)
    }

    render () {
        return <NavDialogs {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        friends: state.dialogsPage.dialogsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {
        requestDialogs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavDialogsContainer)