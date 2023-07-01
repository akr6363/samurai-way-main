import React from 'react';
import {addPostAC, PostsType} from "../../../redux/profile-reducer";
import {ActionsTypes, AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

type MapStateReturnType = {
    postsData: Array<PostsType>
   // newPostText: string
}

type mapDispatchReturnType = {
    //changeNewPostText(value: string): void
    addPost(text: string): void
}

export type MyPostsPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        postsData: state.profilePage.postsData,
        // newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
        // changeNewPostText: (value: string) => {
        //     dispatch(changeNewPostTextAC(value))
        // }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

// export const MyPostsContainer: React.FC<{}> = ({}) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const profileState = store.getState().profilePage
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//                 const changeNewPostText = (value: string) => {
//                     store.dispatch(changeNewPostTextAC(value))
//                 }
//                 return (
//                     <MyPosts
//                         changeNewPostText={changeNewPostText}
//                         addPost={addPost}
//                         postsData={profileState.postsData}
//                         newPostText={profileState.newPostText}
//                     />
//                 )
//             }}
//         </StoreContext.Consumer>
//     );
// };
