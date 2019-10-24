import React from 'react';
import {Field} from 'formik';
import TextField from './TextField';


/**
 * @name Phone
 * @param {TextFieldProps} props - field properties for Formik wrapper 
 */
export const Phone = () => {
    return (
        <Field 
            type="text" 
            name="phone"
            label="Mobile Phone"
            component={TextField} />
    );
}

export default Phone;