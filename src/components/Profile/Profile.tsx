import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: profilePageType
    addPost: () => void
    changeNewPostText: (value: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     changeNewPostText={props.changeNewPostText}/>
        </>
    );
};

export default Profile;