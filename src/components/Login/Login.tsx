import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {LoginContainerPropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";

export const Login: React.FC<LoginContainerPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.loginTC(formData)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

