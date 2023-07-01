import React, {ChangeEvent, createRef} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {SendMessageFormDataType, SendMessageReduxForm} from "./SendMessageForm";
import {MyPostsFormDataType} from "../Profile/MyPosts/MyPostsForm";



// type DialogsPropsType = {
//     state: dialogsPageType
//     sendMessage(): void
//     changeNewMessageText(value: string): void
// }

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.dialogsPage.messageData
        .map(message => <Message
            id={message.id}
            key={message.id}
            message={message.message}
            isMy={message.isMy}/>)

    const onSubmit = (formData: SendMessageFormDataType, ) => {
        props.sendMessage(formData.message)
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