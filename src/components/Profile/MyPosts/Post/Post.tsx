import React, {MouseEventHandler, useState} from 'react';
import styles from './Post.module.scss'
import userPhoto from '../../../../img/userPhoto.jpg';
import {IconButton} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from "@mui/material/Button";
import FavoriteIcon from '@mui/icons-material/Favorite';
type PostPropsType = {
    message: string
    likeCount: number
    comments: number
    views: number
    photo?: string
    name?: string
}

const Post: React.FC<PostPropsType> = (props) => {

    const [likes, setLikes] = useState<number>(props.likeCount)
    const [isLike, setIsLike] = useState<boolean>(false)

    const toggleLike = () => {
        if(!isLike) {
            setIsLike(true)
            setLikes(likes+1)
        }
        else {
            setIsLike(false)
            setLikes(likes-1)
        }

    }

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

                    <Button variant="text" startIcon={isLike ? <FavoriteIcon/> :<FavoriteBorderIcon/>}
                            className={`${styles.reactionBtn} ${isLike ? styles.like : ''}`}
                    onClick={ toggleLike}>
                        {likes}
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