import React from 'react';
import {dialogsPageType, DialogsType, messagesType, requestDialogs, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {UsersContainerPropsType} from "../Users/UsersContainer";
import {followTC, requestUsers, unfollowTC, UserType} from "../../redux/users-reducer";
import {getUsersSuperSelector} from "../../redux/users-selectors";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PathParamsType} from "../Profile/ProfileContainer";

type MapStateReturnType = {
    dialogsPage: dialogsPageType
    users: UserType[]
    dialogs: messagesType
}

type mapDispatchReturnType = {
    sendMessageAC(message: string): void
    requestDialogs(currentPage: number, pageSize: number, friend?: boolean, term?: string): void
}

export type DialogsContainerPropsType = MapStateReturnType & mapDispatchReturnType & RouteComponentProps<PathParamsType>

class DialogsContainer extends React.Component<DialogsContainerPropsType> {

    componentDidMount() {
        this.props.requestDialogs(1, 100, true)
    }

    render () {
        let userId = Number(this.props.match.params.userId)
        return <Dialogs {...this.props} dialog={this.props.dialogs[userId]}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        dialogsPage: state.dialogsPage,
        users: getUsersSuperSelector(state),
        dialogs: state.dialogsPage.messageData
    }
}


const mapDispatchToProps: mapDispatchReturnType = {
    requestDialogs, sendMessageAC
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(DialogsContainer)