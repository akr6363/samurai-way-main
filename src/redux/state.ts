import AndrewPhoto from '../img/friends/Andrew.png'
import DimaPhoto from '../img/friends/Dima.png'
import GarryPhoto from '../img/friends/Garry.png'
import {rerenderEntireTRee} from "../rerender";

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
}
export type dialogsPageType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
}

export type friendsType = {
    id: number
    name:string
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

export let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi, how are you?", likeCount: 15},
            {id: 2, message: "It is my first post", likeCount: 20},
            {id: 3, message: "Yoooo", likeCount: 1111},
            {id: 4, message: "Vlad dibil", likeCount: 100500},
        ]
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
}


export const addPost = (newPostMessage: string) => {
    const newPost = {id: 5, message: newPostMessage, likeCount: 0}
    state.profilePage.postsData.push(newPost)
    rerenderEntireTRee(state)
}

export const sendMessage = (newMessageText: string) => {
    const newMessage = {id: 4, message: newMessageText, isMy: true}
    state.dialogsPage.messageData.push(newMessage)
    rerenderEntireTRee(state)
}