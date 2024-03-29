import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {MyPostsFormDataType, MyPostsReduxForm} from "./MyPostsForm";
import userPhoto from '../../../img/userPhoto.jpg';
import {Dispatch} from "redux";
import {reset} from "redux-form";

const  MyPosts = React.memo((props: MyPostsPropsType) =>{
    const onSubmit = (formData: MyPostsFormDataType, dispatch:Dispatch) => {
        props.addPost(formData.post)
        dispatch(reset('my-posts'));
    }

    let postsElements = props.postsData
        .map(post => <Post key={post.id} post={post}  photo={props.profilePhoto} name={props.name}/>)

    return (
        <>
            <div className={styles.postsFormContainer}>
                <div className={styles.postsForm__photo}>
                    <img src={props.profilePhoto ? props.profilePhoto : userPhoto} alt=""/>
                </div>
            <MyPostsReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </>
    );
})

export default MyPosts;