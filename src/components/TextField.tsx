import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    fieldToTextField,
    TextFieldProps
} from 'formik-material-ui';


const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        txtField: {
            width: '90%',
            alignItems: 'stretch',
            marginLeft: '0%'
        },
        lbl: {
            //@todo label styles
            color: 'white'
        }
    }),
);

/**
 * @name TextField
 * @description We can optionally transform the value here 
 * @param {TextFieldProps} props - field properties for Formik wrapper 
 */
export const TextField = (props:TextFieldProps) => {

    /**
     * @see https://github.com/mui-org/material-ui/issues/15942#issuecomment-497442709
     */
    const classes = useStyles({});

    return (
        <MuiTextField
            className={classes.txtField}
            {...fieldToTextField(props)}
            InputProps={{
                className: classes.lbl
            }}

            /**
             * @name onChange  
             * @description We can optionally transform the value here 
             */
            onChange={event => {
                const {value} = event.target;
                props.form.setFieldValue(
                    props.field.name,
                    value ? value : ''
                );
            }}
        />
    );
}

export default TextField;