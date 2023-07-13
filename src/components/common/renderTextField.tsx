import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel, TextareaAutosize} from "@mui/material";


export const renderTextField: React.FC<any> = ({
                                            input,
                                            label,
                                            meta: { touched, invalid, error },
                                            ...custom
                                        }) => (
    <TextField
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);



export const renderCheckbox = ({ input, label }: any) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={Boolean(input.value)}
                onChange={input.onChange}
                name={input.name}
            />
        }
        label={label}
    />
);
export const renderTextarea = ({ input, label, meta: { touched, error } }: any) => (
    <>
            <TextareaAutosize {...input} placeholder={label}/>
            {touched && error && <span>{error}</span>}
    </>
);
