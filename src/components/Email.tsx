import React from 'react';
import {Field, setNestedObjectValues} from 'formik';
import TextField from './TextField';


/**
 * @name Email
 * @param {TextFieldProps} props - field properties for Formik wrapper 
 */
export const Email = () => {
    return (
        <Field 
            type="email" 
            name="email"
            label="Email"
            component={TextField} />
    );
}

export default Email;