import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'your news'} name={'post'} component={'textarea'}/>
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