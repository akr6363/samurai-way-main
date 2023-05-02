import {ActionsTypes} from './redux-store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_TOTAL_COUNT = 'SET_PAGE_TOTAL_COUNT'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'


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
}

type followActionType = ReturnType<typeof follow>
type unFollowActionType = ReturnType<typeof unFollow>
type setUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setPageTotalCountActionType = ReturnType<typeof setPageTotalCount>
type togglePreloaderActionType = ReturnType<typeof togglePreloader>

export type ActionsTypesForUsers = followActionType | unFollowActionType | setUsersActionType | setCurrentPageActionType | setPageTotalCountActionType | togglePreloaderActionType

const initialState: UsersPageType = {
    users: [],
    pageTotalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false
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
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_PRELOADER:
            return {
                ...state, isFetching: action.isFetching
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
