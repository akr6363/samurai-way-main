import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer, {ActionsTypesForDialogs} from "./dialogs-reducer";
import profileReducer, {ActionsTypesForProfile} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypesForUsers, usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

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
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

//возвращает тип стейта(тип возвраащемого значения rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>


// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


// @ts-ignore
window.store = store
