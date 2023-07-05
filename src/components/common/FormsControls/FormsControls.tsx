import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'


type FormControlProps = WrappedFieldProps  & { element: keyof JSX.IntrinsicElements };

const FormControl: React.FC<FormControlProps>
    = ({input, meta, element: Element,  ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <Element {...input} {...props} />
            </div>
            {(hasError) && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea: React.FC<FormControlProps> = (props) => {
    return <FormControl {...props} element='textarea'></FormControl>
}

export const Input: React.FC<FormControlProps> = (props) => {
    return <FormControl {...props} element='input'></FormControl>
}


// export const _TextArea: React.FC<WrappedFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>
//     = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {(hasError) && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const _Input: React.FC<WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement>>
//     = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {(hasError) && <span>{meta.error}</span>}
//         </div>
//     )
// }