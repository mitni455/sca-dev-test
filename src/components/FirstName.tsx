import React from 'react';
import {Field} from 'formik';
import TextField from './TextField';


/**
 * @name FirstName
 * @param {TextFieldProps} props - field properties for Formik wrapper 
 */
export const FirstName = () => {
    return (
        <Field 
            type="text" 
            name="firstname"
            label="First Name"
            component={TextField} />
    );
}

export default FirstName;