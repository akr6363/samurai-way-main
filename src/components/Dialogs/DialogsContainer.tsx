import React from 'react';
import {changeNewMessageTextAC, dialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateReturnType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}

type mapDispatchReturnType = {
    sendMessage(): void
    changeNewMessageText(value: string): void
}

export type DialogsPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {
        changeNewMessageText: (value: string) => {
            dispatch(changeNewMessageTextAC(value))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)