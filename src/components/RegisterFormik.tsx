import React from 'react';
import { withFormik } from 'formik';
import RegisterForm from './RegisterForm';
import {IRegisterForm} from '../models/IRegisterForm';
import RegisterFormValidationSchema from './RegisterFormValidationSchema';
import RegisterFormService, { ICreateUserResponse } from '../services/RegisterFormService'; //'@services/RegisterFormService';
import log from '../utils/log'; //'@utils/log';
import {Redirect, useHistory} from 'react-router-dom';


/**
 * @name IRegisterContainerProps
 * @description The type of props RegisterFormContainer receives
 *      The external properties to be passed to the HoC 
 *      This allows us to map external values including where we would use Redux 
 * @usage <RegisterFormContainer initialEmail="nick@kitset.io"> 
 */
interface IRegisterContainerProps {
    initial?: {
        firstname?: string;
        lastname?: string;
        email?: string;
        phone?: string;
        message?: string; 
    }
}

/** 
 * @name mapPropsToValues
 * @description Transform outer props into form values
 * @param {IRegisterContainerProps} props - initial state e.g initial.firstname, initial.lastname, initial.email, initial.phone
 */
export const mapPropsToValues = (props:IRegisterContainerProps) => {

    const initial = props.initial;

    return {
        firstname: initial.firstname || '',
        lastname: initial.lastname || '',
        email: initial.email || '',
        phone: initial.phone || '',
    };
}

/**
 * @name handleSubmit
 * @description on Form Submit then send to the backend (if valid)
 *      NB: We don't use Redux here because the form is ephemeral 
 * @requires RegisterFormService
 * @param {IRegisterForm} values - values from form 
 * @todo 💀 create redierct with useHistory and react router not window! 
 */
let history;
export const handleSubmit = async (values: IRegisterForm) => {
    console.log('handleSubmit', values);

    try {
        const resp:ICreateUserResponse = await RegisterFormService.post(values);
        
        if(resp.isValid && resp.isSuccess){
            
            log.info('🥝 handleSubmit.resp -->')
            log.log(resp);
            window.location.href = '/#/cheers';
        }
        else{
            /*@todo - handle state error  */
        }
    }
    catch(err){
        log.error(err.message);
    }
    
}


/**
 * @name RegisterFormik
 * @imports withFormik
 * @description HoC to wrap <Form> with <Formik> and map properties to the form properties 
 * @param {IRegisterContainerProps} props - initial state e.g initial.firstname, initial.lastname, initial.email, initial.phone
 */
const RegisterFormik = withFormik<IRegisterContainerProps, IRegisterForm>({

    /** 
     * @description Transform outer props into form values
     * @param {IRegisterContainerProps} props - initial state e.g initial.firstname, initial.lastname, initial.email, initial.phone
     */
    mapPropsToValues,

    /**
     * @name ValidationSchema
     * @description Custom validation using Yup
     * @requires RegisterFormValidationSchema
     * @param {IRegisterForm} values - values from form 
     * @todo share with backend using npm 
     */
    validationSchema: RegisterFormValidationSchema, 

    /**
     * @name handleSubmit
     * @description on Form Submit then send to the backend (if valid)
     *      NB: We don't use Redux here because the form is ephemeral 
     * @requires RegisterFormService
     * @param {IRegisterForm} values - values from form 
     * @todo create RegisterFormService 
     */
    handleSubmit
    
})(RegisterForm);

export default RegisterFormik;