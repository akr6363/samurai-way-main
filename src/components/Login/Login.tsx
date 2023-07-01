import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit }>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
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

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}