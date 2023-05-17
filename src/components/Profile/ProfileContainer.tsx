import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileTC, ProfileType, setProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '27628'
        }
        this.props.getProfileTC(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>;
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
}

export type ProfileContainerPropsType =
    MapStateToPropsReturnType
    & mapDispatchReturnType
    & RouteComponentProps<PathParamsType>


const mapStateToProps = ({profilePage}: AppStateType): MapStateToPropsReturnType => {
    return {
        profile: profilePage.profile
    }
}
const mapDispatchToProps: mapDispatchReturnType = {
    setProfile, getProfileTC
}

const WithUrlDataContainer = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer)