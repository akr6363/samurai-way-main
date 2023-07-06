import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followTC, requestUsers, unfollowTC,
    UsersPageType,
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {
    gePageTotalCount,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers, getUsersSuperSelector
} from "../../redux/users-selectors";


class UsersContainerAPI extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    selectPage = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users users={this.props.users}
                      pageTotalCount={this.props.pageTotalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      selectPage={this.selectPage}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      unfollowTC={this.props.unfollowTC}
                      followTC={this.props.followTC}
        />
    }
}

type mapDispatchReturnType = {
    requestUsers(currentPage: number, pageSize: number): void
    unfollowTC(userId: number): void
    followTC(userId: number): void
}

export type UsersContainerPropsType = UsersPageType & mapDispatchReturnType

// const mapStateToProps = (state: AppStateType): MapStateReturnType => {
//     return {
//         users: state.usersPage.users
//     }
// }

//деструктцризация
const mapStateToProps = (state: AppStateType) => {
    return {
       // users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageTotalCount: gePageTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}
// const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unFollow: (userID: number) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setPageTotalCount: (pageTotalCount: number) => {
//             dispatch(setPageTotalCountAC(pageTotalCount))
//         },
//         togglePreloader: (isFetching: boolean) => {
//             dispatch(togglePreloaderAC(isFetching))
//         },
//     }
// }

const mapDispatchToProps: mapDispatchReturnType = {
    requestUsers, unfollowTC, followTC
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)