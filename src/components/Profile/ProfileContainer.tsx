import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import axios from "axios";

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

type mapDispatchReturnType = {
    setProfile(profile: ProfileType): void
}

export type ProfileContainerPropsType = MapStateToPropsReturnType & mapDispatchReturnType

type MapStateToPropsReturnType = {
    profile: ProfileType | null
}
const mapStateToProps = ({profilePage}: AppStateType): MapStateToPropsReturnType => {
    return {
        profile: profilePage.profile
    }
}
const mapDispatchToProps: mapDispatchReturnType = {
    setProfile
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerAPI)