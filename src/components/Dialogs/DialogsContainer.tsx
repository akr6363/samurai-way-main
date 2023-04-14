import React from 'react';
import {changeNewMessageTextAC, sendMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {addPostAC, changeNewPostTextAC} from "../../redux/profile-reducer";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {StoreContext} from "../../StoreContext";

// type DialogsPropsType = {
//     store: StoreType
// }

export const DialogsContainer: React.FC<{}> = ({}) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const dialogsState = store.getState().dialogsPage

                const sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                const newMessageTextOnChangeHandler = (value: string) => {
                    store.dispatch(changeNewMessageTextAC(value))
                }
                return (
                    <Dialogs state={dialogsState}
                             sendMessage={sendMessage}
                             changeNewMessageText={newMessageTextOnChangeHandler}/>
                )
            }}
        </StoreContext.Consumer>

    );
};
