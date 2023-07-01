import {Dispatch} from "redux";
import {authAPI, LoginRequestType, profileAPI} from "../api/api";
import {FormDataType} from "../components/Login/LoginForm";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_AUTH = 'SET_AUTH'
const SET_IS_LOGIN_IN = 'SET_IS_LOGIN_IN'
const SET_IS_AUTH = 'SET_IS_AUTH'


export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    isLoginIn: boolean
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoginIn: false,
}

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type setIsLoginIN = ReturnType<typeof setIsLoginIn>
type setIsAuth = ReturnType<typeof setIsAuth>
export type ActionsTypesForAuth = setAuthUserDataActionType | setIsLoginIN | setIsAuth

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypesForAuth) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_IS_LOGIN_IN:
            return {
                ...state,
                isLoginIn: action.isLoginIn
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_AUTH,
    data: {userId, email, login}
} as const)

export const setIsLoginIn = (isLoginIn: boolean) => ({
    type: SET_IS_LOGIN_IN,
    isLoginIn
} as const)

export const setIsAuth = (isAuth: boolean) => ({
    type: SET_IS_AUTH,
    isAuth
} as const)


export const authTC = () => (dispatch: Dispatch<setAuthUserDataActionType | setIsLoginIN>) => {
    authAPI.auth()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, email, login} = response.data
                dispatch(setAuthUserData(id, email, login))
                dispatch(setIsLoginIn(true))
                return id
            }
        })
    // .then((userId) => {
    //     return profileAPI.getProfile(String(userId))
    // })
}
export const loginTC = (loginData: FormDataType) => (dispatch: AppDispatch) => {
    authAPI.login(loginData)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setIsLoginIn(true))
                dispatch(authTC())
            }
        })
}
export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsTypesForAuth>


export const logoutTC = () => (dispatch: Dispatch<setIsLoginIN | setIsAuth>) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setIsLoginIn(false))
                dispatch(setIsAuth(false))
            }
        })
}



