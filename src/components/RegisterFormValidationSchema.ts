import * as Yup from 'yup';

/**
 * @name RegisterFormValidationSchema
 * @requires Yup 
 * @description Yup validation Schema 
 * @param {string} firstname - first name validation
 * @param {string} lastname - last name validation
 * @param {string} email - email validation
 * @param {string} phone - mobile phone validation
 * @tutorial https://github.com/jquense/yup 
 */
const RegisterFormValidationSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phone: Yup.string()
        .min(9, 'Too Short!')
        .max(10, 'Too Long!')
});

export default RegisterFormValidationSchema; 