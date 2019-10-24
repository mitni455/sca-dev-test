import React from "react";
import RegisterFormik from '../components/RegisterFormik';

/*
const classes = {
    header: {
        background: 'linear-gradient(180deg, #474d54, #2d3034)',
        borderBottom: '1px solid #1d1f22',
        margin: '0px',
        lineHeight: '50px',
        boxShadow: '1px 1px 3px rgba(0,0,0,.1)',
        fontSize: '1.2em',
        padding: '0px 5%',
        color: '#c7c2bc',
        fontWeight: 400
    }
}
*/

/**
 * @name HomePage 
 * @description The Home Page yaow 
 * @param props - optional props to pass to Home Page 
 */
const HomePage = props =>{

    const initialRegisterState = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: 'Submit'
    }

    return (
        <React.Fragment>
            <RegisterFormik 
                initial={initialRegisterState}
                />
        </React.Fragment>
    );
}
export default HomePage;