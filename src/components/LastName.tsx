import React from 'react';
import {Field} from 'formik';
import TextField from './TextField';


/**
 * @name LastName
 * @param {TextFieldProps} props - field properties for Formik wrapper 
 */
export const LastName = () => {
    return (
        <Field 
            type="text" 
            name="lastname"
            label="Last Name"
            component={TextField} />
    );
}

export default LastName;