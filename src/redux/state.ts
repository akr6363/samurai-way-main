import AndrewPhoto from '../img/friends/Andrew.png'
import DimaPhoto from '../img/friends/Dima.png'
import GarryPhoto from '../img/friends/Garry.png'

const ADD_POST = "ADD_POST"
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
    isMy: boolean
}
export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type profilePageType = {
    postsData: Array<PostsType>
    newPostText: string
}
export type dialogsPageType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
}
export type friendsType = {
    id: number
    name: string
    photo: string
}
export type navBarType = {
    friends: Array<friendsType>
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    navBar: navBarType
}

type AddPostActionType = ReturnType<typeof addPostAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
type changeNewPostTextActionType = ReturnType<typeof changeNewPostTextAC>

export type ActionsTypes = AddPostActionType
    | SendMessageActionType
    | changeNewPostTextActionType

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
                {id: 1, message: "Hi, how are you?", likeCount: 15},
                {id: 2, message: "It is my first post", likeCount: 20},
                {id: 3, message: "Yoooo", likeCount: 1111},
                {id: 4, message: "Vlad dibil", likeCount: 100500},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Sveta"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Oksana"},
                {id: 5, name: "Andrey"},
            ],
            messageData: [
                {id: 1, message: "Hi", isMy: false},
                {id: 2, message: "How are you?", isMy: true},
                {id: 3, message: "Im fine motherfuker", isMy: false},
            ],
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
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender()
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            debugger
            this._state.profilePage.newPostText = action.value
            this._rerender()
        } else if (action.type === SEND_MESSAGE) {
            debugger
            const newMessage = {id: 4, message: action.newMessageText, isMy: true}
            this._state.dialogsPage.messageData.push(newMessage)
            this._rerender()
        }
    }
}

export const addPostAC = () => ({
    type: ADD_POST
} as const)

export const changeNewPostTextAC = (newText: string) => ({
    type: CHANGE_NEW_POST_TEXT,
    value: newText
} as const)

export const sendMessageAC = (newMessage: string) => ({
    type: SEND_MESSAGE,
    newMessageText: newMessage
} as const)
