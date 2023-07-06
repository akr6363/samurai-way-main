import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    postsData: Array<PostsType>
    profile: ProfileType | null
    status: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type DeletePostActionType = ReturnType<typeof deletePostAC>
type setProfileActionType = ReturnType<typeof setProfile>
type setStatusActionType = ReturnType<typeof setStatus>


export type ActionsTypesForProfile =
    AddPostActionType
    | setProfileActionType
    | setStatusActionType | DeletePostActionType


const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 20},
        {id: 3, message: "Yoooo", likeCount: 1111},
        {id: 4, message: "Vlad dibil", likeCount: 100500},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.text,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
            }

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
};

export const addPostAC = (text: string) => ({
    type: ADD_POST,
    text
} as const)

export const deletePostAC = (postId: number) => ({
    type: DELETE_POST,
    postId
} as const)

export const setProfile = (profile: ProfileType) => ({
    type: SET_PROFILE,
    profile
} as const)

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)


export default profileReducer

export const getProfileTC = (userId: string) => (dispatch: Dispatch<ActionsTypesForProfile>) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setProfile(response))
        })
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch<ActionsTypesForProfile>) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch<ActionsTypesForProfile>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}