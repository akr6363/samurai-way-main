import {ActionsTypes} from "./redux-store";

const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'

export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
    isMy: boolean
}
export type dialogsPageType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
    newMessageText: string
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>
type ChangeNewMessageTextActionType = ReturnType<typeof changeNewMessageTextAC>

export type ActionsTypesForDialogs =
    SendMessageActionType
    | ChangeNewMessageTextActionType

const initialState: dialogsPageType = {
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
        {id: 3, message: "Im fine motherfucker", isMy: false},
    ],
    newMessageText: '',
}

const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes): dialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage =
                {
                    id: 4,
                    message: state.newMessageText,
                    isMy: true
                }
            return {...state,
            messageData: [...state.messageData, newMessage],
            newMessageText: ''}

        case CHANGE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.value}

        default:
            return state
    }
};


export const sendMessageAC = () => ({
    type: SEND_MESSAGE,
} as const)

export const changeNewMessageTextAC = (newText: string) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    value: newText
} as const)


export default dialogsReducer