import {ActionsTypes, AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {PhotoType, profileAPI, ResponseType} from "../api/api";
import {createDate} from "../components/common/utils/createDate";
import {togglePreloader, togglePreloaderActionType} from "./users-reducer";
import {AppDispatch, setMyData, setMyDataActionType} from "./auth-reducer";
import {EditProfileFormFormDataType} from "../components/Profile/ProfileInfo/EditProdfileForm/EditProdfileForm";
import {stopSubmit} from "redux-form";
import {Redirect} from "react-router-dom";
import React from "react";
import {handleServerAppError, handleServerNetworkError} from "../utils/errors-utils";

const ADD_POST = "profile/ADD_POST"
const DELETE_POST = "profile/DELETE_POST"
const SET_PROFILE = 'profile/SET_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PHOTO = 'profile/SET_PHOTO'

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
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
    comments: number
    views: number
    date: string
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
type setPhotoActionType = ReturnType<typeof setPhoto>


export type ActionsTypesForProfile =
    AddPostActionType
    | setProfileActionType
    | setStatusActionType | DeletePostActionType | togglePreloaderActionType | setPhotoActionType

const text = 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: text, likeCount: 15, comments: 2, views: 43, date: '14 dec 2022'},
        {id: 2, message: "It is my first post", likeCount: 20, comments: 4, views: 57, date: '11 nov 2022'},
        {id: 3, message: "Yoooo", likeCount: 1111, comments: 342, views: 2455, date: '07 jul 2022'},
        {id: 4, message: "Vlad dibil", likeCount: 100500, comments: 257, views: 43543535, date: '07 dec 2021'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const id = state.postsData.length + 2
            const newPost = {
                id: id,
                message: action.text,
                likeCount: 0,
                comments: 0,
                views: 0,
                date: createDate(new Date())
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
        case SET_PHOTO:
            return {...state, profile: {...state.profile!, photos: action.photos}}
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
export const setPhoto = (photos: PhotoType) => ({
    type: SET_PHOTO,
    photos
} as const)


export default profileReducer

export const getProfileTC = (userId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        dispatch(togglePreloader(true))
        const response = await profileAPI.getProfile(userId)
        dispatch(setProfile(response))
        dispatch(togglePreloader(false))
    }
    catch (error: any) {
        handleServerNetworkError(error, dispatch)
    }
}

export const getStatusTC = (userId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }
    catch (error: any) {
        handleServerNetworkError(error, dispatch)
    }
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }  else {
            handleServerAppError(response, dispatch)
            return Promise.reject()
        }
    }
    catch (error: any) {
        handleServerNetworkError(error, dispatch)
        return Promise.reject()
    }
}

export const changePhoto = (file: File) => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        dispatch(togglePreloader(true))
        const response = await profileAPI.changePhoto(file)
        if (response.resultCode === 0) {
            dispatch(setPhoto(response.data.photos))
            dispatch(setMyData({photo: response.data.photos.small}))
            dispatch(togglePreloader(false))
        } else {
            handleServerAppError<{ photos: PhotoType }>(response, dispatch)
            return Promise.reject()
        }
    }
    catch (error: any) {
        handleServerNetworkError(error, dispatch)
    }
}

export const updateProfile = (data: EditProfileFormFormDataType) => async (dispatch: AppDispatch, getState:()=>AppStateType) => {
    try {
        const response = await profileAPI.updateProfileData(data)
        if (response.resultCode === 0) {
            const userId = getState().auth.userId?.toString()
            if(userId) {
                dispatch(getProfileTC(userId))
            }
            dispatch(setMyData({name: data.fullName}))
        } else {
            const errors: ErrorsType = {
                contacts: {}
            }
            response.messages.forEach(m=> {
                const key = m.split("->")[1].slice(0, -1).toLowerCase()
                errors.contacts[key] = 'Invalid url format'
            })
            console.log(response.messages)
            dispatch(stopSubmit('edit-profile', errors))
        }
    }
    catch (error: any) {
        handleServerNetworkError(error, dispatch)
    }
}

type ErrorsType = {
    contacts: {
        [key: string]: string
    }
}
