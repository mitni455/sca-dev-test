import React from 'react';
import { FormikProps, Form, Field } from 'formik';
import { FirstName, LastName, Email, Phone} from './index';
import {IRegisterForm} from '../models/IRegisterForm';//'@models/IRegisterForm';
import Grid from '@material-ui/core/Grid';

/**
 * @name classes
 * @description CSS classes 
 */
const classes = {
    form: {
        padding: '2% 5%',
    },
    btn: {
        background: 'linear-gradient(180deg, rgb(136, 143, 149), rgb(90, 96, 100))',
        border: '1px solid rgb(0,0,0,.2)',
        color: 'rgb(199, 194, 188)',
        lineHeight: '2.2em',
        fontFamily: 'roboto, helvetica neue, helvetica',
        fontSize: '1em',
        padding: '0 1em',
        marginTop: '1em',
        borderRadius: '2px',
        textShadow: '1px 1px 1px rgba(0,0,0,.2)'
    }
}

/**
 * @name AdditionalProps
 * @description Any other values not mapped by Formik 
 */
interface AdditionalProps {
    message?: string;
}

/**
 * @name RegisterForm 
 * @description Register form component using Formik as a HoC. Export for testing.   
 * @param {TProps} props - props added to the component 
 * @param {FormikProps<IRegisterForm>} formikProps - props mapped by Formik
 * @extends Form - the Formik Form element that wires up the handleSubmit et al 
 */
export const RegisterForm = (props: FormikProps<IRegisterForm> & AdditionalProps ) => {

    const { values, touched, errors, isSubmitting, message } = props;
    
    return (
        <Form style={classes.form}>
            <Grid container spacing={1}>
                
                <Grid item xs={6}>
                    <FirstName /> 
                </Grid>

                <Grid item xs={6}>
                    <LastName />
                </Grid>

                <Grid item xs={6}>
                    <Email />
                </Grid>

                <Grid item xs={6}>
                    <Phone />
                </Grid>

                <Grid item xs={12}>
                    <button style={classes.btn} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'sending...' : message || 'Submit'}
                    </button>
                </Grid>
            </Grid>
        </Form>
    );
};

export default RegisterForm;