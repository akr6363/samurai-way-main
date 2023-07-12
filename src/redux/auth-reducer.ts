import {Dispatch} from "redux";
import {authAPI, LoginRequestType, profileAPI} from "../api/api";
import {FormDataType} from "../components/Login/LoginForm";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import userPhoto from '../../src/img/userPhoto.jpg';

const SET_AUTH = 'auth/SET_AUTH'
const SET_PHOTO = 'auth/SET_PHOTO'

export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    photo: string
    name: string
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: '',
    name: ''
}

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type setMyDataActionType = ReturnType<typeof setMyData>
export type ActionsTypesForAuth = setAuthUserDataActionType | setMyDataActionType

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypesForAuth) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,
            }
        case SET_PHOTO:
            return {
                ...state,
                photo: action.photo,
                name: action.name
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_AUTH,
    payload: {userId, email, login, isAuth}
} as const)

export const setMyData = (photo: string, name: string) => ({
    type: SET_PHOTO,
    photo,
    name
} as const)


export const authTC = () => async (dispatch: Dispatch<ActionsTypesForAuth>) => {
    const response = await authAPI.auth()
    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
        const profileResponse = await profileAPI.getProfile(String(id));
        dispatch(setMyData(profileResponse.photos.small ? profileResponse.photos.small : userPhoto, profileResponse.fullName))

    }
}
export const loginTC = (loginData: FormDataType) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(loginData)
    if (response.resultCode === 0) {
        dispatch(authTC())
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logoutTC = () => async (dispatch: Dispatch<ActionsTypesForAuth>) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsTypesForAuth | FormAction>


