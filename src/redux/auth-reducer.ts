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
