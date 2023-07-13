import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {email, required} from "../../utils/validators/validators";
import styles from './Login.module.scss'
import Checkbox from '@mui/material/Checkbox';
import {renderCheckbox, renderTextField} from "../common/renderTextField";
import Button from '@mui/material/Button';
import {EditProfileFormFormDataType} from "../Profile/ProfileInfo/EditProdfileForm/EditProdfileForm";


type LoginFormPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormPropsType> & LoginFormPropsType> = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.loginForm1}>
            <div className={styles.loginInput}>
                <Field
                    name="email"
                    component={renderTextField}
                    label="email"
                    variant="outlined"
                    validate={[required, email]}
                />
            </div>
            <div className={styles.loginInput}>
                <Field
                    name="password"
                    component={renderTextField}
                    label="password"
                    variant="outlined"
                    type={'password'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name="rememberMe"
                    component={renderCheckbox}
                    label="Remember me"
                />
            </div>
            {captchaUrl &&
                <>
                <img src={captchaUrl} alt=""/>
                    <Field
                        name="captcha"
                        component={renderTextField}
                        variant="outlined"
                        validate={[required]}
                    />
                </>
            }
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <Button  type="submit" variant="contained" className={styles.submitButton}>Login</Button >
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType, LoginFormPropsType>({
    form: 'login'
})(LoginForm)

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}