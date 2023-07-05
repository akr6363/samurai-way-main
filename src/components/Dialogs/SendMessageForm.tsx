import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styles from "./SendMessageForm.module.css";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

const SendMessageForm: React.FC<InjectedFormProps<SendMessageFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={styles.messageForm}>
            <div className={styles.send}>
                <Field name={'message'} component={TextArea}
                       validate={[required, maxLength100]}
                       className={styles.send__input}/>
                <button className={styles.send__btn}>Send</button>
            </div>
        </form>
    )
}

export const SendMessageReduxForm = reduxForm<SendMessageFormDataType>({
    form: 'send-message'
})(SendMessageForm)

export type SendMessageFormDataType = {
    message: string
}