import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </>
    );
};

export default Profile;