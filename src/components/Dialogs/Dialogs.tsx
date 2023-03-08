import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {message} from "antd";

type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const Dialogs = () => {

    let dialogsData: Array<DialogsType> = [
        {id: 1, name: "Sveta"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Oksana"},
        {id: 5, name: "Andrey"},
    ]

    let messageData: Array<MessageType> = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Im fine motherfuker"},
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messagesElements = messageData
        .map(message => <Message key={message.id} message={message.message}/>)


    return (
        <div className={styles.page}>
            <div className={styles.page__dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.page__messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;