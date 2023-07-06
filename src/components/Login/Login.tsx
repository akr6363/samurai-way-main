import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {LoginContainerPropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";

export const Login: React.FC<LoginContainerPropsType> = ({loginTC,isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        loginTC(formData)
    }

    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

