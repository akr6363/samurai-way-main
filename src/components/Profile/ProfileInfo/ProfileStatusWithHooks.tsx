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
                    : <StatusSpan onDoubleClick={activateEditMode}

                    >{status || 'No status'}</StatusSpan>
                }
            </ProfileStatusBlock>

        )
}

const StatusSpan = styled.span`
  display: block;
  padding: 5px 10px;

  &:hover {
    background-color: rgba(161, 161, 161, 0.56);
  }
`
const StatusInput = styled.input`
  flex: 1 1 100%;
  padding: 5px 10px;
`


const ProfileStatusBlock = styled.div`
  display: flex;
  flex-direction: column;
`
