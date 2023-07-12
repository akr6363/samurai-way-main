import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {ActionsTypesForUsers, setCurrentPage, setPageTotalCount, setUsers, togglePreloader} from "./users-reducer";
import dialogs from "../components/Dialogs/Dialogs";
import userPhoto from '../img/userPhoto.jpg';
import {createMessages} from "../components/common/utils/createMessages";

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'
const SET_DIALOGS = 'dialogs/SET_DIALOGS'
const CREATE_DIALOG = 'dialogs/CREATE_DIALOG'

export type DialogsType = {
    id: number
    name: string
    photo?: string
}
export type MessageType = {
    id: number
    message: string
    isMy: boolean
}

export type messagesType = {
    [key: number]: MessageType[],
}

export type dialogsPageType = {
    dialogsData: Array<DialogsType>
    messageData: messagesType
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>
type setDialogsActionType = ReturnType<typeof setDialogs>

export type ActionsTypesForDialogs =
    SendMessageActionType | setDialogsActionType

const initialState: dialogsPageType = {
    dialogsData: [],
    // messageData: [
    //     {id: 1, message: "Hi", isMy: false},
    //     {id: 2, message: "How are you?", isMy: true},
    //     {id: 3, message: "Im fine motherfucker", isMy: false},
    // ],
    messageData: {}

}

const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes): dialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage =
                {
                    id: 4,
                    message: action.message,
                    isMy: true
                }
            return {
                ...state,
                // messageData: [...state.messageData, newMessage]
                messageData: {
                    ...state.messageData,
                    [action.userId]: [...state.messageData[action.userId], newMessage]
                }
            }
        case SET_DIALOGS:
            return {
                ...state,
                dialogsData: action.dialogs,
                messageData: createMessages(action.dialogs)
            }


        default:
            return state
    }
};


export const sendMessageAC = (message: string, userId: number) => ({
    type: SEND_MESSAGE,
    message, userId
} as const)

export const setDialogs = (dialogs: DialogsType[]) => ({
    type: SET_DIALOGS,
    dialogs
} as const)

export const requestMessages = () => ({
    type: SET_DIALOGS,
    dialogs
} as const)

export const requestDialogs = (currentPage: number, pageSize: number, friend?: boolean, term: string = '') => async (dispatch: Dispatch<ActionsTypesForDialogs>) => {
    // dispatch(togglePreloader(true))
    const response = await usersAPI.getUsers(currentPage, pageSize, friend, term)
    const dialogs: DialogsType[] = response.items.map(u=> ({id: u.id, name: u.name, photo: u.photos.small ? u.photos.small : userPhoto}))
    dispatch(setDialogs(dialogs))
    // dispatch(togglePreloader(false))
}


export default dialogsReducer