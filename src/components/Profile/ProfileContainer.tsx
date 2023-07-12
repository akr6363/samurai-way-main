import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileTC, getStatusTC, ProfileType, updateStatusTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authorizedUserI) {
            userId = this.props.authorizedUserI.toString()
        } else if (!userId && !this.props.authorizedUserI) {
            this.props.history.push('/login')
        }
        if (userId) {
            this.props.getProfileTC(userId)
            this.props.getStatusTC(userId)
        }
    }
    render() {
        return <Profile profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatusTC}
                         isMe={this.props.profile?.userId === this.props.authorizedUserI}

        />}
}

export type PathParamsType = {
    userId?: string | undefined
}

type mapDispatchReturnType = {
    getProfileTC(userId: string | undefined): void
    getStatusTC(userId: string | undefined): void
    updateStatusTC(status: string): void
}
type MapStateToPropsReturnType = {
    profile: ProfileType | null
    status: string
    authorizedUserI: number | null
    isAuth: boolean
}

export type ProfileContainerPropsType =
    MapStateToPropsReturnType
    & mapDispatchReturnType
    & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: AppStateType): MapStateToPropsReturnType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserI: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps: mapDispatchReturnType = {
    getProfileTC,
    getStatusTC,
    updateStatusTC
}

export default compose<React.ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)
