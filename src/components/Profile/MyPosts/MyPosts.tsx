import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {MyPostsFormDataType, MyPostsReduxForm} from "./MyPostsForm";
import userPhoto from '../../../img/userPhoto.jpg';

const  MyPosts = React.memo((props: MyPostsPropsType) =>{
    const onSubmit = (formData: MyPostsFormDataType,) => {
        props.addPost(formData.post)
    }

    let postsElements = props.postsData
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount} photo={props.profilePhoto} name={props.name} comments={post.comments} views={post.views}/>)

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