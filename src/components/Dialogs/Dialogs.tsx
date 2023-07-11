import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {SendMessageFormDataType, SendMessageReduxForm} from "./SendMessageForm";
import {reset} from "redux-form";
import {Dispatch} from "redux";


const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage, }) => {

    let dialogsElements = dialogsPage.dialogsData
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messagesElements = dialogsPage.messageData
        .map(message => <Message
            id={message.id}
            key={message.id}
            message={message.message}
            isMy={message.isMy}/>)

    const onSubmit = (formData: SendMessageFormDataType, dispatch:Dispatch ) => {
        sendMessage(formData.message)
        dispatch(reset('send-message'));
    }

    return (
         <div className={styles.page}>
            <div className={styles.page__dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.page__messages}>
                {messagesElements}
                <SendMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Dialogs;