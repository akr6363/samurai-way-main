import React from 'react';
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setPageTotalCountAC,
    setUsersAC, togglePreloaderAC,
    unFollowAC,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import axios from "axios";

class UsersContainerAPI extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPageTotalCount(response.data.totalCount)
                this.props.togglePreloader(false)
            })
    }

    selectPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.togglePreloader(false)
            })
    }

    render() {
        return  <Users users={this.props.users}
                           pageTotalCount={this.props.pageTotalCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           follow={this.props.follow}
                           unFollow={this.props.unFollow}
                           selectPage={this.selectPage}
                       isFetching={this.props.isFetching}

        />
    }
}


type mapDispatchReturnType = {
    follow(userID: number): void
    unFollow(userID: number): void
    setUsers(users: UserType[]): void
    setCurrentPage(currentPage: number): void
    setPageTotalCount(pageTotalCount: number): void
    setPageTotalCount(pageTotalCount: number): void
    togglePreloader(isFetching: boolean): void
}

export type UsersContainerPropsType = UsersPageType & mapDispatchReturnType

// const mapStateToProps = (state: AppStateType): MapStateReturnType => {
//     return {
//         users: state.usersPage.users
//     }
// }

//деструктцризация
const mapStateToProps = ({usersPage}: AppStateType): UsersPageType => {
    return {
        users: usersPage.users,
        pageTotalCount: usersPage.pageTotalCount,
        pageSize: usersPage.pageSize,
        currentPage: usersPage.currentPage,
        isFetching: usersPage.isFetching,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setPageTotalCount: (pageTotalCount: number) => {
            dispatch(setPageTotalCountAC(pageTotalCount))
        },
        togglePreloader: (isFetching: boolean) => {
            dispatch(togglePreloaderAC(isFetching))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)