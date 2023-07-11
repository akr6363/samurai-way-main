import React from 'react';
import styles from './Post.module.scss'
import userPhoto from '../../../../img/userPhoto.jpg';
import {IconButton} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from "@mui/material/Button";

type PostPropsType = {
    message: string
    likeCount: number
    comments: number
    views: number
    photo?: string
    name?: string
}

const Post: React.FC<PostPropsType> = (props) => {

    return (
        <div className={styles.postContainer}>
            <div className={styles.post__top}>
                <div className={styles.post__photo}>
                    <img
                        src={props.photo ? props.photo : userPhoto}
                        alt=""/>

                </div>
                <div className={styles.post__info}>
                    <h3 className={styles.post__desc}>{props.name}</h3>
                    <p className={styles.post__data}>14 dec 2022</p>
                </div>
            </div>
            <div className={styles.post}>

                <p className={styles.post__text}>{props.message}</p>
                <div className={styles.post__reactions}>

                    <Button variant="text" startIcon={<FavoriteBorderIcon/>} className={styles.reactionBtn}>
                        {props.likeCount}
                    </Button>
                    <Button variant="text" startIcon={<ChatBubbleOutlineIcon/>} className={styles.reactionBtn}>
                        {props.comments}
                    </Button>
                    <Button variant="text" startIcon={<RemoveRedEyeIcon/>} className={styles.reactionBtn}>
                        {props.views}
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default Post;