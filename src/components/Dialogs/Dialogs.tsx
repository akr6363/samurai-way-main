import React from 'react';
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {DialogsContainerPropsType} from "./DialogsContainer";
import {SendMessageFormDataType, SendMessageReduxForm} from "./SendMessageForm";
import {reset} from "redux-form";
import {Dispatch} from "redux";
import {MessageType, sendMessageAC} from "../../redux/dialogs-reducer";
import NavDialogsContainer from "./navDialogs/NavDialogsContainer";
import NavDialogsItem from "./navDialogs/navDialogsItem/NavDialogsItem";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import {NavLink} from "react-router-dom";

type DialogsPropsType = DialogsContainerPropsType & {
    userId: number
}


const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessageAC, userId, myPhoto, myName}) => {
    let messagesElements: JSX.Element[] = []
    const dialog = dialogsPage.messageData[userId]
    const user = dialogsPage.dialogsData.find(d => d.id === userId)
    if (dialog) {
        messagesElements = dialog
            .map(message => <Message
                id={message.id}
                key={message.id}
                message={message.message}
                isMy={message.isMy}
                user={user}
                myPhoto={myPhoto}
                myName={myName}
            />)
    }

    const onSubmit = (formData: SendMessageFormDataType, dispatch: Dispatch) => {
        sendMessageAC(formData.message)
        dispatch(reset('send-message'));
    }

    return (
        <div style={{display: 'flex'}}>
            <div className={styles.dialogsPage}>


                {
                    dialog
                        ? <>
                            <div className={styles.page__messages}>
                                <div className={styles.dialogsPage__info}>
                                    <NavDialogsItem id={userId} photo={user?.photo} name={user?.name}/>
                                    <NavLink to={`/profile/${userId}`} className={styles.friendLInk}>
                                        <Button className={styles.toProfileBtn}
                                                onClick={() => {
                                                }}
                                                endIcon={<ArrowRightAltIcon/>}>
                                            Go to profile</Button>
                                    </NavLink>
                                </div>
                                <div className={styles.messagesContainer}>
                                    {messagesElements}
                                </div>
                                <SendMessageReduxForm onSubmit={onSubmit}/>
                            </div>
                        </>
                        : <div className={styles.dialogsPage__empty}>Select a dialog...</div>
                }

            </div>
            <NavDialogsContainer/>
        </div>


    );
};

export default Dialogs;