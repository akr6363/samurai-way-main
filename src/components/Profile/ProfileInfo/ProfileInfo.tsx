import styles from "./ProfileInfo.module.scss";
import React, {ChangeEvent} from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from '../../../img/userPhoto.jpg';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import {Input} from "@mui/material";
import UploadingImagesBtn from "../../common/UploadingImagesBtn/UploadingImagesBtn";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus(status: string): void
    isMe: boolean
    changePhoto(photoFile: File): void
    isFetching: boolean
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    const {profile, status, updateStatus, isMe, changePhoto, isFetching} = props;

    const onSelectedPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            changePhoto(e.currentTarget.files[0])
        }
    }



    return (
        profile ?
            <div className={styles.profile}>
                <div className={styles.user}>
                    <div className={styles.user__photo}>
                        {isFetching ? <Preloader/> :  <img src={profile.photos.large ?? userPhoto} alt='users photo' className={styles.photo__img}/>}

                        {isMe && <UploadingImagesBtn onChange={onSelectedPhoto}/>}
                    </div>
                    <div className={styles.user__info}>
                        <h3 className={styles.user__title}>{profile.fullName}</h3>
                        {isMe
                            ? <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                            : <StatusSpanUser>{status || 'No status'}</StatusSpanUser>}
                        <hr/>
                        <p><b>About me:</b> {profile.aboutMe ? profile.aboutMe : 'No information'}</p>
                        <p><b>Looking for a
                            job:</b> {profile.lookingForAJob ? profile.lookingForAJob : 'No information'}</p>
                        <p>
                            <b>Post:</b> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No information'}
                        </p>
                        <hr/>
                        <h4 className={styles.user__subtitle}>Contacts:</h4>
                        <p>
                            <b>Facebook:</b> {profile.contacts.facebook ? profile.contacts.facebook : 'No information'}
                        </p>
                        <p><b>Github:</b> {profile.contacts.github ? profile.contacts.github : 'No information'}</p>
                        <p><b>Vk:</b> {profile.contacts.vk ? profile.contacts.vk : 'No information'}</p>
                        <p><b>Twitter:</b> {profile.contacts.twitter ? profile.contacts.twitter : 'No information'}
                        </p>
                        <p>
                            <b>Instagram:</b> {profile.contacts.instagram ? profile.contacts.instagram : 'No information'}
                        </p>
                        <p><b>Youtube:</b> {profile.contacts.youtube ? profile.contacts.youtube : 'No information'}
                        </p>
                        <p><b>Website:</b> {profile.contacts.website ? profile.contacts.website : 'No information'}
                        </p>
                    </div>

                </div>
            </div>
            : <Preloader/>
    )
}

export const StatusSpanUser = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  word-wrap: break-word;
`