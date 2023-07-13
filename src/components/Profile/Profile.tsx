import React, {useState} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {EditProfileFormFormDataType} from "./ProfileInfo/EditProdfileForm/EditProdfileForm";


type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus(status: string): void
    isMe: boolean
    isFetching: boolean
    changePhoto(photoFile: File): void
    updateProfile(data: EditProfileFormFormDataType): Promise<ResponseType>
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isMe, isFetching, changePhoto,updateProfile}) => {

    return (

        isFetching
            ? <div className={'page'}>
                <Preloader/>
            </div>

            : <>
                <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isMe={isMe} changePhoto={changePhoto} isFetching={isFetching} updateProfile={updateProfile}/>
                {isMe && <MyPostsContainer/>}
            </>

    );
};

export default Profile;