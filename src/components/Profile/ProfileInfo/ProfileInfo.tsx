import styles from "./ProfileInfo.module.css";
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
                <>
                    <div className={styles.banner}>
                        <img
                            src="https://www.pavelin.ru/images/stories/flamingo/flam_003.jpg"
                            alt="" className="content__banner"/>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.user__photo}>
                            <img src={profile.photos.large ?? userPhoto} alt='users photo'/>
                        </div>
                        <div className={styles.user__info}>
                            <h3>{profile.fullName}</h3>
                            <div>{profile.aboutMe}</div>
                            {/*<ProfileStatus status={status} updateStatus={updateStatus}/>*/}
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                        </div>

                    </div>
                </>
                : <Preloader/>
        )
    }
}