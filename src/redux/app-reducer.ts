import {AppDispatch, authTC} from "./auth-reducer";

const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED'
const SET_ERROR = 'SET_ERROR'

export type AuthStateType = {
    isInitialized: boolean
    error: null | string
}

const initialState: AuthStateType = {
    isInitialized: false,
    error: null
}

export type setIsInitializedActionType = ReturnType<typeof setIsInitialized>
export type setAppErrorActionType = ReturnType<typeof setAppError>

export type ActionsTypesForApp = setIsInitializedActionType | setAppErrorActionType

export const appReducer = (state: AuthStateType = initialState, action: ActionsTypesForApp) => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};

export const setIsInitialized = (isInitialized: boolean) => ({
    type: SET_IS_INITIALIZED,
    isInitialized
} as const)


export const setAppError = (error: string | null) => ({
    type: SET_ERROR,
    error
} as const)


export const initializeApp = () => (dispatch: AppDispatch) => {
    dispatch(authTC())
        .then(() => {
            dispatch(setIsInitialized(true))
        })
}






