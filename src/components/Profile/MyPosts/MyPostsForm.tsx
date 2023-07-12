import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import styles from './MyPosts.module.scss'
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import {IconButton} from "@mui/material";
import {renderTextarea} from "../../common/renderTextField";
import SendIcon from '@mui/icons-material/Send';
const maxLength1000 = maxLengthCreator(1000)

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={styles.postForm}>
            <Field label={'Your news'} name={'post'} component={renderTextarea}/>
            <div className={styles.line}></div>
            <div className={styles.postFormActions}>
                <div>
                    <IconButton aria-label="delete" size="small">
                        <PlayCircleOutlineIcon fontSize="small" />
                    </IconButton>

                    <IconButton aria-label="delete" size="small">
                        <CameraAltIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <AudiotrackIcon fontSize="small" />
                    </IconButton>

            </div>

            <Button variant="contained" type='submit' size={'small'} className={styles.postButton}>Send</Button>
        </div>
</form>
)
}

export const MyPostsReduxForm = reduxForm<MyPostsFormDataType>({
    form: 'my-posts'
})(MyPostsForm)

export type MyPostsFormDataType = {
    post: string
}