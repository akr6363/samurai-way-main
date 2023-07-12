import AndrewPhoto from '../img/friends/Andrew.png'
import DimaPhoto from '../img/friends/Dima.png'
import GarryPhoto from '../img/friends/Garry.png'
import dialogsReducer, {dialogsPageType} from "./dialogs-reducer";
import sidebarReducer, {navBarType} from "./sidebar-reducer";
import {ActionsTypes} from "./redux-store";
import profileReducer, {ProfilePageType} from "./profile-reducer";

export type StateType = {
    profilePage: ProfilePageType
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

export const store: StoreType = {
    _rerender() {
    },
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likeCount: 15, comments: 2, views: 43},
                {id: 2, message: "It is my first post", likeCount: 20, comments: 4, views: 57},
                {id: 3, message: "Yoooo", likeCount: 1111, comments: 342, views: 2455},
                {id: 4, message: "Vlad dibil", likeCount: 100500, comments: 257, views: 43543535},
            ],

            profile: null,
            status: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Sveta", photo: ''},
                {id: 2, name: "Dima", photo: ''},
                {id: 3, name: "Igor", photo: ''},
                {id: 4, name: "Oksana", photo: ''},
                {id: 5, name: "Andrey", photo: ''},
            ],
            // messageData: [
            //     {id: 1, message: "Hi", isMy: false},
            //     {id: 2, message: "How are you?", isMy: true},
            //     {id: 3, message: "Im fine motherfucker", isMy: false},
            // ],
            messageData: {}
        },
        navBar: {
            friends: [
                {id: 1, name: 'Andrew', photo: AndrewPhoto},
                {id: 2, name: 'Dima', photo: DimaPhoto},
                {id: 3, name: 'Garry', photo: GarryPhoto},
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerender = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navBar = sidebarReducer(this._state.navBar, action)
        this._rerender()
    }
}



