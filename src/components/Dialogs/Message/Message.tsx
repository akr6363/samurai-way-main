import React from "react";
import styles from "./Message.module.css";

type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}