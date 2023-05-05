import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '27628'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
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
    setProfile
}

const WithUrlDataContainer = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer)