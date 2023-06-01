import React from 'react';
import {changeNewMessageTextAC, dialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";

type MapStateReturnType = {
    dialogsPage: dialogsPageType
}

type mapDispatchReturnType = {
    sendMessage(): void
    changeNewMessageText(value: string): void
}

export type DialogsPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        dialogsPage: state.dialogsPage,
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

// const AuthRedirectComponent = (props: DialogsPropsType) => {
//     return props.isAuth
//         ? <Dialogs {...props}/>
//         : <Redirect to={'/login'}/>
// }

// export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))


export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)