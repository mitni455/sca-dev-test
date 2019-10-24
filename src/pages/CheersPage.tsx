import React from "react";
import RegisterFormik from '../components/RegisterFormik';

const classes = {
    header: {
        display: 'flex',
        margin: '0px',
        color: '#c7c2bc',
        fontWeight: 400,
        textAlign: 'center' as const,
        width: '100%',
        height: 'calc(100vh - 60px)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    msg: {
        display: 'block',
        lineHeight: '50px',
        fontSize: '1.2em'
    }
}

/**
 * @name CheersPage 
 * @description The Home Page yaow 
 * @param props - optional props to pass to Home Page 
 */
const CheersPage = props =>{

    return (
        <React.Fragment>
            <main style={classes.header}>
                <div style={classes.msg}>
                    Thank you for subscribing!
                </div>
            </main>
        </React.Fragment>
    );
}
export default CheersPage;