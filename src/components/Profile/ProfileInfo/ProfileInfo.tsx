import styles from "./ProfileInfo.module.scss";
import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from '../../../img/userPhoto.jpg';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus(status: string): void
}

export class ProfileInfo extends React.PureComponent<ProfileInfoPropsType> {
    render() {
        const {profile, status, updateStatus} = this.props;
        return (
            profile ?
                <div className={styles.profile}>
                    {/*<div className={styles.banner}>*/}
                    {/*    <img*/}
                    {/*        src="https://www.pavelin.ru/images/stories/flamingo/flam_003.jpg"*/}
                    {/*        alt="" className="content__banner"/>*/}
                    {/*</div>*/}
                    <div className={styles.user}>
                        <div className={styles.user__photo}>
                            <img src={profile.photos.large ?? userPhoto} alt='users photo'/>
                        </div>
                        <div className={styles.user__info}>
                            <h3 className={styles.user__title}>{profile.fullName}</h3>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                            <hr/>
                            <p><b>About me:</b> {profile.aboutMe ? profile.aboutMe : 'No information'}</p>
                            <p><b>Looking for a job:</b> {profile.lookingForAJob ? profile.lookingForAJob : 'No information'}</p>
                            <p><b>Post:</b> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No information'}</p>
                            <hr/>
                            <h4 className={styles.user__subtitle}>Contacts:</h4>
                            <p><b>Facebook:</b> {profile.contacts.facebook ? profile.contacts.facebook : 'No information'}</p>
                            <p><b>Github:</b> {profile.contacts.github ? profile.contacts.github : 'No information'}</p>
                            <p><b>Vk:</b> {profile.contacts.vk ? profile.contacts.vk : 'No information'}</p>
                            <p><b>Twitter:</b> {profile.contacts.twitter ? profile.contacts.twitter : 'No information'}</p>
                            <p><b>Instagram:</b> {profile.contacts.instagram ? profile.contacts.instagram : 'No information'}</p>
                            <p><b>Youtube:</b> {profile.contacts.youtube ? profile.contacts.youtube : 'No information'}</p>
                            <p><b>Website:</b> {profile.contacts.website ? profile.contacts.website : 'No information'}</p>
                            {/*<ProfileStatus status={status} updateStatus={updateStatus}/>*/}

                        </div>

                    </div>
                </div>
                : <Preloader/>
        )
    }
}