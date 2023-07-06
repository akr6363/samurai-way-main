import React from 'react';
import {dialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";

type MapStateReturnType = {
    dialogsPage: dialogsPageType
}

type mapDispatchReturnType = {
    sendMessage(message: string): void
}

export type DialogsPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        }
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)