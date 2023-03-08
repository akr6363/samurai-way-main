import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/state";



type DialogsPropsType = {
    state: dialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {


    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.messageData
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