import React from "react";
import styles from "./Message.module.css";
import myPhoto from '../../../img/my.png'
import friendPhoto from '../../../img/friends/Andrew.png'
import {MessageType} from "../../../redux/store";

type MessagePropsType = MessageType
export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={`${styles.message} 
        ${props.isMy ? styles.message__my : styles.message__friend}`}>
            <div className={`${styles.photo}
                 ${props.isMy ? styles.photo__my : styles.photo__friend}`}>
                <img src={props.isMy ? myPhoto : friendPhoto} alt=""/>
            </div>
            <div className={styles.text}>{props.message}</div>
        </div>
    )
}