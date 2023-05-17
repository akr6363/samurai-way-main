import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {ActionsTypesForDialogs} from "./dialogs-reducer";
import profileReducer, {ActionsTypesForProfile} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypesForUsers, usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


export type ActionsTypes =
    ActionsTypesForProfile
    | ActionsTypesForDialogs
    | ActionsTypesForUsers

// export type StateType = {
//     profilePage: profilePageType
//     dialogsPage: dialogsPageType
//     navBar: navBarType
// }

// export type StoreType = {
//     _rerender: () => void
//     _state: AppStateType
//     getState: () => AppStateType
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionsTypes) => void
// }

//------------------------------------------------------------

//возвращает стейт всего приложения
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

//возвращает тип стейта(тип возвраащемого значения rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store
