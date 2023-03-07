import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={styles.page}>
            <div className={styles.page__dialogs}>
                <DialogItem name="Sveta" id={1}/>
                <DialogItem name="Dima" id={2}/>
                <DialogItem name="Igor" id={3}/>
                <DialogItem name="Oksana" id={4}/>
                <DialogItem name="Andrey" id={5}/>
            </div>
            <div className={styles.page__messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Im fine motherfuker"/>
            </div>
        </div>
    );
};

export default Dialogs;