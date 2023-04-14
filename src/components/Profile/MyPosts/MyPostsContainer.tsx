import React from 'react';
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

//
// type MyPostsPropsType = {
//     store: StoreType
// }

export const MyPostsContainer: React.FC<{}> = ({}) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const profileState = store.getState().profilePage
                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                const changeNewPostText = (value: string) => {
                    store.dispatch(changeNewPostTextAC(value))
                }
                return (
                    <MyPosts
                        changeNewPostText={changeNewPostText}
                        addPost={addPost}
                        postsData={profileState.postsData}
                        newPostText={profileState.newPostText}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
};
