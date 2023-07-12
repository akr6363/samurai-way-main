import React from 'react';
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {DialogsContainerPropsType} from "./DialogsContainer";
import {SendMessageFormDataType, SendMessageReduxForm} from "./SendMessageForm";
import {reset} from "redux-form";
import {Dispatch} from "redux";
import {MessageType, sendMessageAC} from "../../redux/dialogs-reducer";
import NavDialogsContainer from "./navDialogs/NavDialogsContainer";

type DialogsPropsType = DialogsContainerPropsType & {
    dialog: MessageType[]
}


const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessageAC, dialog}) => {
    let messagesElements: JSX.Element[] = []
    if (dialog) {
        messagesElements = dialog
            .map(message => <Message
                id={message.id}
                key={message.id}
                message={message.message}
                isMy={message.isMy}/>)
    }

    const onSubmit = (formData: SendMessageFormDataType, dispatch: Dispatch) => {
        sendMessageAC(formData.message)
        dispatch(reset('send-message'));
    }

    return (
        <div style={{display: 'flex'}}>
            <div className={styles.dialogsPage}>
                {
                    dialog
                        ? <>
                            <div className={styles.page__messages}>
                                {messagesElements}
                                <SendMessageReduxForm onSubmit={onSubmit}/>
                            </div>
                        </>
                        : <div className={styles.dialogsPage__empty}>Select a dialog...</div>
                }

            </div>
            <NavDialogsContainer/>
        </div>


    );
};

export default Dialogs;