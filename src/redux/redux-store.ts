import {combineReducers, createStore} from "redux";
import dialogsReducer, {ActionsTypesForDialogs} from "./dialogs-reducer";
import profileReducer, {ActionsTypesForProfile} from "./profile-reducer";
import sidebarReducer, {navBarType} from "./sidebar-reducer";
import exp from "constants";

export type ActionsTypes =
    ActionsTypesForProfile
    | ActionsTypesForDialogs

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
    navBar: sidebarReducer
})

//возвращает тип стейта(тип возвраащемого значения rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer)
