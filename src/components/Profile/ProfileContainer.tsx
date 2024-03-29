import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    changePhoto,
    getProfileTC,
    getStatusTC,
    ProfileType,
    updateProfile,
    updateStatusTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getIsFetching} from "../../redux/users-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import {EditProfileFormFormDataType} from "./ProfileInfo/EditProdfileForm/EditProdfileForm";
import {ResponseType} from "../../api/api";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    getProfile = () => {
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

    componentDidMount() {
        this.getProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile()
        }
    }


    render() {
        return (

            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatusTC}
                     isMe={this.props.profile?.userId === this.props.authorizedUserI}
                     isFetching={this.props.isFetching}
                     changePhoto={this.props.changePhoto}
                     updateProfile={this.props.updateProfile}
            />

        )
    }
}

export type PathParamsType = {
    userId?: string | undefined
}

type mapDispatchReturnType = {
    getProfileTC(userId: string | undefined): void
    getStatusTC(userId: string | undefined): void
    updateStatusTC(status: string): any
    changePhoto(photoFile: File): void
    updateProfile(data: EditProfileFormFormDataType): void
}
type MapStateToPropsReturnType = {
    profile: ProfileType | null
    status: string
    authorizedUserI: number | null
    isAuth: boolean
    isFetching: boolean
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
        isAuth: state.auth.isAuth,
        isFetching: getIsFetching(state),
    }
}
const mapDispatchToProps: mapDispatchReturnType = {
    getProfileTC,
    getStatusTC,
    updateStatusTC,
    changePhoto,
    updateProfile
}

export default compose<React.ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)
