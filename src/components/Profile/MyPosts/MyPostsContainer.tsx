import React from 'react';
import {addPostAC, PostsType} from "../../../redux/profile-reducer";
import {ActionsTypes, AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

type MapStateReturnType = {
    postsData: Array<PostsType>
}

type mapDispatchReturnType = {
    addPost(text: string): void
}

export type MyPostsPropsType = MapStateReturnType & mapDispatchReturnType

const mapStateToProps = (state: AppStateType): MapStateReturnType => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchReturnType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
