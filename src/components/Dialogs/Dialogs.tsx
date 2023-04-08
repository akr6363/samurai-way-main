import React, {ChangeEvent, createRef} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes,  dialogsPageType, } from "../../redux/state";
import {changeNewMessageTextAC, sendMessageAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {


    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.messageData
        .map(message => <Message
            id={message.id}
            key={message.id}
            message={message.message}
            isMy={message.isMy}/>)


    const sendMessage = () => {
            props.dispatch(sendMessageAC())
    }

    const newMessageTextOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }


    return (
        <div className={styles.page}>
            <div className={styles.page__dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.page__messages}>
                {messagesElements}
                <div className={styles.send}>
                    <textarea value={props.state.newMessageText}
                              className={styles.send__input}
                              onChange={newMessageTextOnChangeHandler}>
                    </textarea>
                    <button onClick={sendMessage} className={styles.send__btn}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;