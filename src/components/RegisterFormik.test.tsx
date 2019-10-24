import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import RegisterFormik from './RegisterFormik';

const setUp = (props: any = {}) => {
    const component = shallow(<RegisterFormik {...props} />);
    return component;
}


describe("RegisterFormik Component", () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp({initial: { firstname: "", lastname: "", email: "", phone: "" }});
    })

    it ("Should render without errors", () => {
        
        
        // console.log(component.debug());

        expect(component.find('Formik').length).toBe(1);

    })
})

