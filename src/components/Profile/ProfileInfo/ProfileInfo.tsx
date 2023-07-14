import styles from "./ProfileInfo.module.scss";
import React, {ChangeEvent, useState} from "react";
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from '../../../img/userPhoto.jpg';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import styled from "styled-components";
import UploadingImagesBtn from "../../common/UploadingImagesBtn/UploadingImagesBtn";
import {EditProfileFormFormDataType, EditProfileReduxForm} from "./EditProdfileForm/EditProdfileForm";
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {ResponseType} from "../../../api/api";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus(status: string): Promise<any>
    isMe: boolean
    changePhoto(photoFile: File): void
    isFetching: boolean
    updateProfile(data: EditProfileFormFormDataType): any
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    const {profile, status, updateStatus, isMe, changePhoto, isFetching, updateProfile} = props;

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
                        {isFetching ? <Preloader/> : <img src={profile.photos.large ?? userPhoto} alt='users photo'
                                                          className={styles.photo__img}/>}

                        {isMe && <UploadingImagesBtn onChange={onSelectedPhoto}/>}
                    </div>
                    <div className={styles.user__info}>
                        <h3 className={styles.user__title}>{profile.fullName}</h3>
                        {isMe
                            ? <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                            : <StatusSpanUser>{status || 'No status'}</StatusSpanUser>}
                        <hr/>
                        <ProfileData profile={profile} updateProfile={updateProfile} isMe={isMe}/>
                    </div>

                </div>
            </div>
            : <Preloader/>
    )
}

type AboutMePropsType = {
    profile: ProfileType
    updateProfile(data: EditProfileFormFormDataType): void
    isMe: boolean
}


const ProfileData: React.FC<AboutMePropsType> = ({profile, updateProfile, isMe}) => {

    const [isEdit, setIsEdit] = useState<boolean>(false)

    const onSubmit = (formData: EditProfileFormFormDataType) => {
        updateProfile(formData)


        // updateProfile(formData)
        // setIsEdit(false)
    }

    return (
        isEdit
            ? <EditProfileReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
            : <>
                <p className={styles.profile_text}><b>About me:</b> {profile.aboutMe
                    ? profile.aboutMe
                    : <span className={styles.noInfo}>No information</span>}
                </p>
                <p className={styles.profile_text_job}><b>Looking for a
                    job:</b> {profile.lookingForAJob ? <CheckIcon className={styles.jobIcon}/> :
                    <ClearIcon className={styles.jobIcon}/>}</p>
                <p className={styles.profile_text}>
                    <b>My
                        skills:</b> {profile.lookingForAJobDescription
                    ? profile.lookingForAJobDescription
                    : <span className={styles.noInfo}>No information</span>}
                </p>
                <hr/>
                <h4 className={styles.user__subtitle}>Contacts:</h4>
                {Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key} title={key}
                                    value={profile.contacts[key as keyof ContactsType] ? profile.contacts[key as keyof ContactsType] : 'No information'}/>
                })}
                {isMe &&
                    <Button type="submit" variant="outlined"
                            onClick={() => setIsEdit(true)} size={'small'}
                            className={styles.editProfileBtn}>
                        Edit</Button>}
            </>

    )
}

export type ContactPropsType = {
    title: string
    value: string
}

const Contact: React.FC<ContactPropsType> = ({title, value}) => {
    return (
        <p>
            <b>{title}:</b> <span className={value === 'No information' ? styles.noInfo : ''}>{value}</span>
        </p>
    )
}


export const StatusSpanUser = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  word-wrap: break-word;
`