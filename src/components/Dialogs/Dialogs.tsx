import React, {ChangeEvent, createRef} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";



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


    const sendMessage = () => {
        props.sendMessage()
    }

    const newMessageTextOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageText(e.currentTarget.value)
    }

    return (
        props.isAuth
        ? <div className={styles.page}>
            <div className={styles.page__dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.page__messages}>
                {messagesElements}
                <div className={styles.send}>
                    <textarea value={props.dialogsPage.newMessageText}
                              className={styles.send__input}
                              onChange={newMessageTextOnChangeHandler}>
                    </textarea>
                    <button onClick={sendMessage} className={styles.send__btn}>Send</button>
                </div>
            </div>
        </div>
            : <Redirect to={'/login'}/>
    );
};

export default Dialogs;