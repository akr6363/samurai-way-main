import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type ProfilePropsType = {
    state: profilePageType
    addPost: (newPostMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </>
    );
};

export default Profile;