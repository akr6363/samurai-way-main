import {ActionsTypes} from './redux-store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_TOTAL_COUNT = 'SET_PAGE_TOTAL_COUNT'


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
}

type followActionType = ReturnType<typeof followAC>
type unFollowActionType = ReturnType<typeof unFollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type setPageTotalCountActionType = ReturnType<typeof setPageTotalCountAC>

export type ActionsTypesForUsers = followActionType | unFollowActionType | setUsersActionType | setCurrentPageActionType | setPageTotalCountActionType

const initialState: UsersPageType = {
    users: [],
    pageTotalCount: 0,
    pageSize: 10,
    currentPage: 1
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users
                    .map(u => u.id === action.userId ? {...u, isFollowed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users
                    .map(u => u.id === action.userId ? {...u, isFollowed: false} : u)
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
        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    type: FOLLOW,
    userId
} as const)

export const unFollowAC = (userId: number) => ({
    type: UNFOLLOW,
    userId
} as const)

export const setUsersAC = (users: UserType[]) => ({
    type: SET_USERS,
    users
} as const)

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)

export const setPageTotalCountAC = (pageTotalCount: number) => ({
    type: SET_PAGE_TOTAL_COUNT,
    pageTotalCount
} as const)