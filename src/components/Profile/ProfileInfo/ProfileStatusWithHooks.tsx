import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {TextareaAutosize} from "@mui/material";

type ProfileStatusPropsType = {
    status: string
    updateStatus(status: string): void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) =>  {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onFocus= (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget.select()
    }


    return (
            <ProfileStatusBlock>
                {editMode
                    ?
                    <StatusInput autoFocus value={status}
                                   onBlur={deactivateEditMode}
                                   onChange={onChangeStatus}
                                 onFocus={onFocus}/>

                    : <StatusSpan onDoubleClick={activateEditMode}>{status || 'No status'}</StatusSpan>
                }
            </ProfileStatusBlock>

        )
}

export const StatusSpan = styled.span`
  
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  word-wrap: break-word;
  padding: 5px 0;
  &:hover {
    background-color: rgba(161, 161, 161, 0.56);
  }
`
const StatusInput = styled(TextareaAutosize)`
  font-family: Roboto,sans-serif;
  padding: 5px 0;
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  margin-bottom: 2px;
  resize: none;
  &:focus {
    outline: none;
    border: none;
  }
`


const ProfileStatusBlock = styled.div`
  //max-width: 100%;
`
