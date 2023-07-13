import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styles from "./EditProdfileForm.module.scss";
import {renderCheckbox, renderTextField} from "../../../common/renderTextField";
import Button from "@mui/material/Button";
import {ContactsType, ProfileType} from "../../../../redux/profile-reducer";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

export type EditProfileFormFormDataType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
}
type EditProfileFormPropsType = {
    profile: ProfileType
}

const maxLength30 = maxLengthCreator(30)

const EditProfileForm: React.FC<InjectedFormProps<EditProfileFormFormDataType, EditProfileFormPropsType> & EditProfileFormPropsType> =
    ({
         handleSubmit,
         error,
         profile
     }) => {
        return (
            <form onSubmit={handleSubmit} className={styles.editProfileForm}>
                <table style={{width: '100%'}}>
                    <tbody>
                    <tr>
                        <td><b>Full name:</b></td>
                        <td><Field name="fullName" component={renderTextField}
                                   variant="outlined" validate={[required, maxLength30]}/></td>
                    </tr>
                    <tr>
                        <td><b>About me:</b></td>
                        <td><Field name="aboutMe" component={renderTextField}
                                   variant="outlined" validate={[required]}/></td>
                    </tr>

                    <tr>
                        <td><b>My skills:</b></td>
                        <td>
                            <Field name="lookingForAJobDescription" component={renderTextField}
                                   variant="outlined" validate={[required]}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Looking for a job:</b></td>
                        <td>
                            <Field name="lookingForAJob" component={renderCheckbox}/>
                        </td>
                    </tr>
                    {Object.keys(profile.contacts).map((key) => {
                        return <ContactEditInput key={key} title={key}/>
                    })}
                    </tbody>
                </table>
                {error && <div className={styles.formSummaryError}>{error}</div>}
                <Button type="submit" variant="contained" className={styles.saveButton} size={'small'}>Save</Button>

            </form>
        )
    }

const ContactEditInput: React.FC<{ title: string }> = ({title}) => {
    return (
        <tr>
            <td><b>{title}:</b></td>
            <td>
                <Field name={'contacts.' + title} component={renderTextField}
                       variant="outlined" validate={[]}/>
            </td>
        </tr>

    )
}

export const EditProfileReduxForm = reduxForm<EditProfileFormFormDataType, EditProfileFormPropsType>({
    form: 'edit-profile'
})(EditProfileForm)
