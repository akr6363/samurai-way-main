import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileTC, getStatusTC, ProfileType, updateStatusTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authorizedUserI) {
            userId = this.props.authorizedUserI.toString()
        }
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)
    }
    render() {
        return <Profile profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatusTC}
        />

    }
}

type PathParamsType = {
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

// const AuthRedirectComponent = WithAuthRedirect(ProfileContainerAPI)

// const AuthRedirectComponent = (props: ProfileContainerPropsType) => {
//     return props.isAuth
//         ? <ProfileContainerAPI {...props}/>
//         : <Redirect to={'/login'}/>
// }

//const WithUrlDataContainer = withRouter(AuthRedirectComponent)

// const WithUrlDataContainer = withRouter(ProfileContainerAPI)
//
// export const ProfileContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer))

export default compose<React.ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)
