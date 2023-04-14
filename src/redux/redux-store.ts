import {combineReducers, createStore} from "redux";
import dialogsReducer, {ActionsTypesForDialogs, dialogsPageType} from "./dialogs-reducer";
import profileReducer, {ActionsTypesForProfile, profilePageType} from "./profile-reducer";
import sidebarReducer, {navBarType} from "./sidebar-reducer";

export type ActionsTypes =
    ActionsTypesForProfile
    | ActionsTypesForDialogs

export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    navBar: navBarType
}

export type StoreType = {
    _rerender: () => void
    _state: StateType
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

//------------------------------------------------------------

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: sidebarReducer
})


export const store: StoreType = createStore(reducers)

console.log(store)