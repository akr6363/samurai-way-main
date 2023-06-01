import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsReturnType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsReturnType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = <T,>(Component: ComponentType<T>) => {
    const RedirectComponent = (props: MapStateToPropsReturnType) => {

        let {isAuth, ...restProps} = props
        return isAuth
            ? <Component {...restProps as T}/>
            : <Redirect to={'/login'}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
};



export default WithAuthRedirect;