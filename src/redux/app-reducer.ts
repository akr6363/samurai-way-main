import {AppDispatch, authTC} from "./auth-reducer";

const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED'

export type AuthStateType = {
    isInitialized: boolean
}

const initialState: AuthStateType = {
    isInitialized: false
}

export type setIsInitializedActionType = ReturnType<typeof setIsInitialized>

export type ActionsTypesForApp = setIsInitializedActionType

export const appReducer = (state: AuthStateType = initialState, action: ActionsTypesForApp) => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state
    }
};

export const setIsInitialized = (isInitialized: boolean) => ({
    type: SET_IS_INITIALIZED,
    isInitialized
} as const)

export const initializeApp = () => (dispatch: AppDispatch) => {
    dispatch(authTC())
        .then(() => {
            dispatch(setIsInitialized(true))
        })
}




