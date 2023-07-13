import {ActionsTypes} from './redux-store';
import {ResponseType, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";
import {getRandomString} from "../components/common/utils/getRandomString";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_PAGE_TOTAL_COUNT = 'users/SET_PAGE_TOTAL_COUNT'
const TOGGLE_PRELOADER = 'users/TOGGLE_PRELOADER'
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'


export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: { small?: string, large?: string }
    status?: string
    uniqueUrlName?: string
    city: string
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
// type unFollowActionType = ReturnType<typeof unFollow>
type setUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setPageTotalCountActionType = ReturnType<typeof setPageTotalCount>
export type togglePreloaderActionType = ReturnType<typeof togglePreloader>
type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

export type ActionsTypesForUsers =
    followActionType
    // | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setPageTotalCountActionType
    | togglePreloaderActionType
    | toggleFollowingProgressActionType

const initialState: UsersPageType = {
    users: [],
    pageTotalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: action.isFollow})
            }
        case SET_USERS:
            return {
                ...state, users: action.users.map(u => ({...u, city: getRandomString()}))
            }
        case SET_PAGE_TOTAL_COUNT:
            return {
                ...state, pageTotalCount: action.pageTotalCount
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

export const follow = (userId: number, isFollow: boolean) => ({
    type: FOLLOW,
    userId, isFollow
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


export const requestUsers = (currentPage: number, pageSize: number, friend?: boolean, term: string = '') => async (dispatch: Dispatch<ActionsTypesForUsers>) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(togglePreloader(true))
    const response = await usersAPI.getUsers(currentPage, pageSize, friend, term)
    dispatch(setUsers(response.items))
    dispatch(setPageTotalCount(response.totalCount))
    dispatch(togglePreloader(false))

}

const followUnfollowFlow =
    async (dispatch: Dispatch<ActionsTypesForUsers>, userId: number,
           apiMethod: Promise<ResponseType>, ActionCreator: followActionType) => {
        dispatch(toggleFollowingProgress(true, userId))
        const response = await apiMethod
        if (response.resultCode === 0) {
            dispatch(ActionCreator)
        }
        dispatch(toggleFollowingProgress(false, userId))
    }

export const unfollowTC = (userId: number) => async (dispatch: Dispatch<ActionsTypesForUsers>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow(userId), follow(userId, false))
}

export const followTC = (userId: number) => async (dispatch: Dispatch<ActionsTypesForUsers>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow(userId), follow(userId, true))
}

