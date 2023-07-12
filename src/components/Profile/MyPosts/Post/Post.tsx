import React, {MouseEventHandler, useState} from 'react';
import styles from './Post.module.scss'
import userPhoto from '../../../../img/userPhoto.jpg';
import {IconButton} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from "@mui/material/Button";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {PostsType} from "../../../../redux/profile-reducer";
type PostPropsType = {
    post: PostsType
    photo?: string
    name?: string
}

const Post: React.FC<PostPropsType> = ({post, photo, name}) => {

    const [likes, setLikes] = useState<number>(post.likeCount)
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
                        src={photo ? photo : userPhoto}
                        alt=""/>

                </div>
                <div className={styles.post__info}>
                    <h3 className={styles.post__desc}>{name}</h3>
                    <p className={styles.post__data}>{post.date}</p>
                </div>
            </div>
            <div className={styles.post}>
                    <p className={styles.post__text}>{post.message}</p>
                <div className={styles.post__reactions}>

                    <Button variant="text" startIcon={isLike ? <FavoriteIcon/> :<FavoriteBorderIcon/>}
                            className={`${styles.reactionBtn} ${isLike ? styles.like : ''}`}
                    onClick={ toggleLike}>
                        {likes}
                    </Button>
                    <Button variant="text" startIcon={<ChatBubbleOutlineIcon/>} className={styles.reactionBtn}>
                        {post.comments}
                    </Button>
                    <Button variant="text" startIcon={<RemoveRedEyeIcon/>} className={styles.reactionBtn}>
                        {post.views}
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default Post;