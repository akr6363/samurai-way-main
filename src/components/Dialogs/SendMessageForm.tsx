import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styles from "./SendMessageForm.module.scss";
import {maxLengthCreator} from "../../utils/validators/validators";
import {renderTextarea} from "../common/renderTextField";
import {IconButton} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const maxLength100 = maxLengthCreator(100)

const SendMessageForm: React.FC<InjectedFormProps<SendMessageFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={styles.messageForm}>
            <Field label={'Write a message...'}
                   name={'message'} component={renderTextarea} className={styles.send__input}/>
            <IconButton aria-label="send" size="large"  type='submit' className={styles.postButton} >
                <SendIcon fontSize="inherit" className={styles.postButton__icon}/>
            </IconButton>
        </form>
    )
}

export const SendMessageReduxForm = reduxForm<SendMessageFormDataType>({
    form: 'send-message'
})(SendMessageForm)

export type SendMessageFormDataType = {
    message: string
}