import {Dispatch} from "redux";
import {ActionsTypes} from "../redux/redux-store";
import {setAppError} from "../redux/app-reducer";
import {togglePreloader} from "../redux/users-reducer";

export const handleServerNetworkError =  (error: { message: string }, dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setAppError(error.message ? error.message : 'Some error occurred'))
    dispatch(togglePreloader(false))
}