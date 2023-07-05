import {Dispatch} from "redux";
import {authAPI, LoginRequestType, profileAPI} from "../api/api";
import {FormDataType} from "../components/Login/LoginForm";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit, StopSubmitAction} from "redux-form";

const SET_AUTH = 'SET_AUTH'
const SET_IS_LOGIN_IN = 'SET_IS_LOGIN_IN'


export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
   // isLoginIn: boolean
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
//type setIsLoginIN = ReturnType<typeof setIsLoginIn>
export type ActionsTypesForAuth = setAuthUserDataActionType

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypesForAuth) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId: number | null, email: string| null, login: string| null ,isAuth: boolean) => ({
    type: SET_AUTH,
    payload: {userId, email, login, isAuth}
} as const)





export const authTC = () => (dispatch: Dispatch<setAuthUserDataActionType >) => {
    authAPI.auth()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, email, login} = response.data
                dispatch(setAuthUserData(id, email, login, true))
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
                dispatch(authTC())
            } else {
                const message = response.messages.length > 0 ? response.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsTypesForAuth | FormAction>


export const logoutTC = () => (dispatch: Dispatch<ActionsTypesForAuth>) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}



