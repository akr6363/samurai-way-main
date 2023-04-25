import AndrewPhoto from '../img/friends/Andrew.png'
import {ActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type UserAddressType = {
    city: string
    country: string
}
// export type UserType = {
//     id: number
//     isFollowed: boolean
//     fullName: string
//     status: string
//     address: UserAddressType
//     photo: string
// }
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
}

type followActionType = ReturnType<typeof followAC>
type unFollowActionType = ReturnType<typeof unFollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>

export type ActionsTypesForUsers = followActionType | unFollowActionType | setUsersActionType

const initialState: UsersPageType = {
    users: []
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
                ...state, users: [...state.users, ...action.users]
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