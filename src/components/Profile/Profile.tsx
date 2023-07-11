import React, {useState} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus(status: string): void
    isMe: boolean
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isMe}) => {

    return (
            <>
                <ProfileInfo profile={profile} status={status}  updateStatus={updateStatus}/>
                {isMe && <MyPostsContainer/>}
            </>

    );
};

export default Profile;