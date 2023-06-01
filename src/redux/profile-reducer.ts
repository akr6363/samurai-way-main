import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
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
    newPostText: string
    profile: ProfileType | null
    status: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type changeNewPostTextActionType = ReturnType<typeof changeNewPostTextAC>
type setProfileActionType = ReturnType<typeof setProfile>
type setStatusActionType = ReturnType<typeof setStatus>


export type ActionsTypesForProfile =
    AddPostActionType
    | changeNewPostTextActionType
    | setProfileActionType
    | setStatusActionType


const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 20},
        {id: 3, message: "Yoooo", likeCount: 1111},
        {id: 4, message: "Vlad dibil", likeCount: 100500},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: ''
            }

        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.value}
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
};

export const addPostAC = () => ({
    type: ADD_POST
} as const)

export const changeNewPostTextAC = (newText: string) => ({
    type: CHANGE_NEW_POST_TEXT,
    value: newText
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