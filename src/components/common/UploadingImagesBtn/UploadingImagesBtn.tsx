import React, {ChangeEvent} from 'react';
import {Input} from "@mui/material";
import Button from "@mui/material/Button";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

type UploadingImagesBtnPropsType = {
    onChange(e: ChangeEvent<HTMLInputElement>): void
}

export const UploadingImagesBtn: React.FC<UploadingImagesBtnPropsType> = ({onChange}) => {


    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }

    };

    return (
        <>
            <Input
                type="file"
                inputRef={inputRef}
                onChange={onChange}
                style={{display: 'none'}}
            />
            <Button onClick={handleClick} startIcon={<ChangeCircleIcon/>}
                    style={{textTransform: 'none'}}>Edit photo</Button>
        </>
    );
};

export default UploadingImagesBtn;