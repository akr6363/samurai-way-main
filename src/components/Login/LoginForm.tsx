import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import styles from '../common/FormsControls/FormsControls.module.css'


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <label>
                    Remember me
                    <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
                </label>
            </div>
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <button>Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}