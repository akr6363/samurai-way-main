import React from "react";
import styles from "./Message.module.scss";
import {DialogsType} from "../../../redux/dialogs-reducer";
import {MyDataType} from "../../../redux/auth-reducer";
import cn from 'classnames'


type MessagePropsType = {
    id: number
    message: string
    isMy: boolean
    user?: DialogsType
    myData: MyDataType
}


export const Message: React.FC<MessagePropsType> = ({id, message, isMy, user, myData}) => {
    return (
        // <div className={`${styles.message}
        // ${isMy ? styles.message__my : styles.message__friend}`}>
        <div className={cn(styles.message, {
            [styles.message__my]: isMy,
            [styles.message__friend]: !isMy,
        })}>
            <div className={`${styles.photo}
                 ${isMy ? styles.photo__my : styles.photo__friend}`}>
                <img src={isMy ? myData.photo : user?.photo} alt=""/>
            </div>
            <div className={styles.text}>
                <div className={`${styles.name}
                 ${isMy ? styles.name__my : styles.name__friend}`}>{isMy ? myData.name : user?.name}</div>
                <div>{message}</div>
            </div>
        </div>
    )
}