import React from "react";
import formStyles from "./FormControl.module.css"
export const Input = ({input, meta, props, type}) => (
    <div>
        <div className={formStyles.formControl +" "+(meta.touched && meta.error ? formStyles.error:undefined)}>
            <input  {...input} {...props} type={type}/>
            {meta.touched &&
            ((meta.error && <span className={formStyles.formControl +" "+formStyles.error} >{meta.error}</span>) ||
                (meta.warning && <span>{meta.warning}</span>))}
        </div>
    </div>
)

export const Textarea = ({input, meta, ...props}) => {
    return <div>
        <textarea  {...input} {...props}/>
        {meta.touched &&
        ((meta.error && <span>{meta.error}</span>) ||
            (meta.warning && <span>{meta.warning}</span>))}
    </div>
}