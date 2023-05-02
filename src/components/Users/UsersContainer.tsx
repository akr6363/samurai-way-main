import React from 'react';
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setPageTotalCountAC,
    setUsersAC,
    unFollowAC,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import axios from "axios";

class UsersContainerAPI extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPageTotalCount(response.data.totalCount)
            })
    }

    selectPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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

        />
    }
}


type mapDispatchReturnType = {
    follow(userID: number): void
    unFollow(userID: number): void
    setUsers(users: UserType[]): void
    setCurrentPage(currentPage: number): void
    setPageTotalCount(pageTotalCount: number): void
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
        currentPage: usersPage.currentPage
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
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)