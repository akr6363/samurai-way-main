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
import {UsersClass} from "./UsersClass";

type mapDispatchReturnType = {
    follow(userID: number): void
    unFollow(userID: number): void
    setUsers(users: UserType[]): void
    setCurrentPage(currentPage: number): void
    setPageTotalCount(pageTotalCount: number): void
}

export type UsersPropsType = UsersPageType & mapDispatchReturnType

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)