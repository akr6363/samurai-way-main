import {Dispatch} from "redux";
import {authAPI, LoginRequestType, profileAPI, securityAPI} from "../api/api";
import {FormDataType} from "../components/Login/LoginForm";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import userPhoto from '../../src/img/userPhoto.jpg';

const SET_AUTH = 'auth/SET_AUTH'
const SET_MY_DATA = 'auth/SET_MY_DATA'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

export type MyDataType = {
    photo?: string
    name?: string
}

export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    myData: MyDataType
    captchaUrl: string | null
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    myData: {
        photo: '',
        name: '',
    },
    captchaUrl: null
}

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type setMyDataActionType = ReturnType<typeof setMyData>
export type setCaptchaUrlActionType = ReturnType<typeof setCaptchaUrl>
export type ActionsTypesForAuth = setAuthUserDataActionType | setMyDataActionType | setCaptchaUrlActionType

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypesForAuth) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,
            }
        case SET_MY_DATA:
            return {
                ...state,
                myData: {
                    ...state.myData,
                    ...action.myData
                }
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_AUTH,
    payload: {userId, email, login, isAuth}
} as const)

export const setMyData = (myData: MyDataType) => ({
    type: SET_MY_DATA,
    myData
} as const)

export const setCaptchaUrl = (captchaUrl: string) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
} as const)


export const authTC = () => async (dispatch: Dispatch<ActionsTypesForAuth>) => {
    const response = await authAPI.auth()
    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
        const profileResponse = await profileAPI.getProfile(String(id));
        const myData = {
            photo: profileResponse.photos.small ? profileResponse.photos.small : userPhoto,
            name: profileResponse.fullName,
        }
        dispatch(setMyData(myData))

    }
}
export const loginTC = (loginData: FormDataType) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(loginData)
    if (response.resultCode === 0) {
        dispatch(authTC())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
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

export const getCaptchaUrl = () => async (dispatch: Dispatch<ActionsTypesForAuth>) => {
    const response = await securityAPI.getCaptchaUrl()
    dispatch(setCaptchaUrl(response.url))
}

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsTypesForAuth | FormAction>


