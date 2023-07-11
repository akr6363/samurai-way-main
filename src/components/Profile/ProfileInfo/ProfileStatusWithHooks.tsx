import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";

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

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <ProfileStatusBlock>
                {editMode
                    ? <StatusInput autoFocus type="text" value={status}
                                   onBlur={deactivateEditMode}
                                   onChange={onChangeStatus}/>
                    : <StatusSpan onDoubleClick={activateEditMode}>{status || 'No status'}</StatusSpan>
                }
                {/*<StatusSpan onDoubleClick={activateEditMode}>{status || 'No status'}</StatusSpan>*/}
            </ProfileStatusBlock>

        )
}

const StatusSpan = styled.p`
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  word-wrap: break-word;
  &:hover {
    background-color: rgba(161, 161, 161, 0.56);
  }
`
const StatusInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: none;
  }
`


const ProfileStatusBlock = styled.div`

  //max-width: 100%;
`
