import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit }>
            <div>
                <Field placeholder={'email'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <label >
                    Remember me
                    <Field  type={"checkbox"}  name={'rememberMe'} component={'input'}/>
                </label>
            </div>
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