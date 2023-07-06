import {ActionsTypes} from './redux-store';
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_TOTAL_COUNT = 'SET_PAGE_TOTAL_COUNT'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'


export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: { small?: string, large?: string}
    status?: string
    uniqueUrlName?: string
}
export type UsersPageType = {
    users: UserType[]
    pageTotalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type followActionType = ReturnType<typeof follow>
type unFollowActionType = ReturnType<typeof unFollow>
type setUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setPageTotalCountActionType = ReturnType<typeof setPageTotalCount>
type togglePreloaderActionType = ReturnType<typeof togglePreloader>
type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

export type ActionsTypesForUsers = followActionType | unFollowActionType | setUsersActionType | setCurrentPageActionType | setPageTotalCountActionType | togglePreloaderActionType | toggleFollowingProgressActionType

const initialState: UsersPageType = {
    users: [],
    pageTotalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users
                    .map((u) => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: false} : u)

            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_PAGE_TOTAL_COUNT:
            return {
                ...state, pageTotalCount: action.pageTotalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_PRELOADER:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const follow = (userId: number) => ({
    type: FOLLOW,
    userId
} as const)

export const unFollow = (userId: number) => ({
    type: UNFOLLOW,
    userId
} as const)

export const setUsers = (users: UserType[]) => ({
    type: SET_USERS,
    users
} as const)

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)

export const setPageTotalCount = (pageTotalCount: number) => ({
    type: SET_PAGE_TOTAL_COUNT,
    pageTotalCount
} as const)

export const togglePreloader = (isFetching: boolean) => ({
    type: TOGGLE_PRELOADER,
    isFetching
} as const)

export const toggleFollowingProgress = (isFetching: boolean, userID: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userID
} as const)


export const requestUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionsTypesForUsers>) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(togglePreloader(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setUsers(response.items))
            dispatch(setPageTotalCount(response.totalCount))
            dispatch(togglePreloader(false))
        })
}

export const unfollowTC = (userId: number) => (dispatch: Dispatch<ActionsTypesForUsers>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(unFollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}

export const followTC = (userId: number) => (dispatch: Dispatch<ActionsTypesForUsers>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}

