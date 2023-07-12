import React from "react";
import styles from "./Message.module.scss";
import myPhoto from '../../../img/my.png'
import friendPhoto from '../../../img/friends/Andrew.png'
import {DialogsType} from "../../../redux/dialogs-reducer";


type MessagePropsType = {
    id: number
    message: string
    isMy: boolean
    user?: DialogsType
    myPhoto: string
    myName: string
}


export const Message: React.FC<MessagePropsType> = ({id, message, isMy, user, myPhoto, myName}) => {
    return (
        <div className={`${styles.message} 
        ${isMy ? styles.message__my : styles.message__friend}`}>
            <div className={`${styles.photo}
                 ${isMy ? styles.photo__my : styles.photo__friend}`}>
                <img src={isMy ? myPhoto : user?.photo} alt=""/>
            </div>
            <div className={styles.text}>
                <div>{isMy ? myName : user?.name}</div>
                {message}
            </div>
        </div>
    )
}