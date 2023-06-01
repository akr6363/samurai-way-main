import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import styled from "styled-components";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    setEditMode(isEdit: boolean) {
        this.setState({
            editMode: isEdit
        })
    }

    render() {
        return (
            <ProfileStatusBlock>
                {this.state.editMode
                        ? <StatusInput autoFocus type="text" value={this.props.status} onBlur={()=>this.setEditMode(false)}/>
                        : <StatusSpan onDoubleClick={()=>this.setEditMode(true)}>{this.props.status}</StatusSpan>
                }
            </ProfileStatusBlock>

        )
    }
}

const StatusSpan = styled.span `
  display: block;
  padding: 5px 10px;
  &:hover {
    background-color: rgba(161, 161, 161, 0.56);
  }
`
const StatusInput = styled.input `
flex: 1 1 100%;
  padding: 5px 10px;
`


const ProfileStatusBlock = styled.div `
display: flex;
  flex-direction: column;
`
