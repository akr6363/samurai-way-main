import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";

const SET_AUTH = 'SET_AUTH'


export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type ActionsTypesForAuth = setAuthUserDataActionType

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypesForAuth) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_AUTH,
    data: {userId, email, login}
} as const)

export const authTC = () => (dispatch: Dispatch<setAuthUserDataActionType>) => {
    authAPI.auth()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, email, login} = response.data
                dispatch(setAuthUserData(id, email, login))
                return id
            }
        })
        .then((userId) => {
            return profileAPI.getProfile(String(userId))
        })
        .then(response => {
            // console.log(response)
        })
}
