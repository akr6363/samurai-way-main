import {ActionsTypes, dialogsPageType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'

type SendMessageActionType = ReturnType<typeof sendMessageAC>
type ChangeNewMessageTextActionType = ReturnType<typeof changeNewMessageTextAC>

export type ActionsTypesForDialogs =
    SendMessageActionType
    | ChangeNewMessageTextActionType

const dialogsReducer = (state: dialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage =
                {
                    id: 4,
                    message: state.newMessageText,
                    isMy: true
                }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state

        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.value
            return state

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