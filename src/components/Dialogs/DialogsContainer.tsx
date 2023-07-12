import React from 'react';
import {dialogsPageType, requestDialogs, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PathParamsType} from "../Profile/ProfileContainer";

type MapStateReturnType = {
    dialogsPage: dialogsPageType
    myPhoto: string
    myName: string
}

type mapDispatchReturnType = {
    sendMessageAC(message: string, userId: number): void
    requestDialogs(currentPage: number, pageSize: number, friend?: boolean, term?: string): void
}

export type DialogsContainerPropsType = MapStateReturnType & mapDispatchReturnType & RouteComponentProps<PathParamsType>

class DialogsContainer extends React.Component<DialogsContainerPropsType> {

    componentDidMount() {
        this.props.requestDialogs(1, 100, true)
    }

    render() {
        let userId = Number(this.props.match.params.userId)
        return <Dialogs {...this.props} userId={userId}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        dialogsPage: state.dialogsPage,
        myPhoto: state.auth.photo,
        myName: state.auth.name

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