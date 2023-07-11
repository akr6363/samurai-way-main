import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {LoginContainerPropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";
import styles from './Login.module.scss'
import loginCat from '../../img/login.png'

export const Login: React.FC<LoginContainerPropsType> = ({loginTC, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        loginTC(formData)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.login}>
            <div className={styles.login__leftBlock}>
                <h1>Hello!</h1>
                <img src={loginCat} alt="" className={styles.login__img}/>
                <p className={styles.desc}>
                    Welcome to my social network!<br/>
                </p>
                <p>You can register&nbsp;
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}>here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
            <div className={styles.login__rightBlock}>
                <div className={styles.loginFormContainer}>
                    <h1 className={styles.loginFormTitle}>Login</h1>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
};

