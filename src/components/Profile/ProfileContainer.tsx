import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileTC, ProfileType, setProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '27628'
        }
        this.props.getProfileTC(userId)
    }

    render() {
        return this.props.isAuth
            ? <Profile profile={this.props.profile}/>
            : <Redirect to={'/login'}/>
    }
}

type PathParamsType = {
    userId?: string | undefined
}

type mapDispatchReturnType = {
    setProfile(profile: ProfileType): void
    getProfileTC(userId: string): void
}
type MapStateToPropsReturnType = {
    profile: ProfileType | null
    isAuth: boolean
}

export type ProfileContainerPropsType =
    MapStateToPropsReturnType
    & mapDispatchReturnType
    & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: AppStateType): MapStateToPropsReturnType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps: mapDispatchReturnType = {
    setProfile, getProfileTC
}

const WithUrlDataContainer = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer)