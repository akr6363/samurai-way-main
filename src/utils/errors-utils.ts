import {Dispatch} from "redux";
import {ActionsTypes} from "../redux/redux-store";
import {setAppError} from "../redux/app-reducer";
import {togglePreloader} from "../redux/users-reducer";
import {ResponseType} from "../api/api";

export const handleServerNetworkError =  (error: { message: string }, dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setAppError(error.message ? error.message : 'Some error occurred'))
    dispatch(togglePreloader(false))
}

export const handleServerAppError = <R>(data: ResponseType<R>, dispatch: Dispatch<ActionsTypes>) => {
    if(data.messages.length) {
        dispatch(setAppError(data.messages[0]))
    } else {
        dispatch(setAppError('Some error occurred'))
    }
    dispatch(togglePreloader(false))
}