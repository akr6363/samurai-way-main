import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30)

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'your news'} name={'post'} component={TextArea}
                validate={[required, maxLength30]}/>
            </div>
            <button>Send</button>
        </form>
    )
}

export const MyPostsReduxForm = reduxForm<MyPostsFormDataType>({
    form: 'my-posts'
})(MyPostsForm)

export type MyPostsFormDataType = {
    post: string
}