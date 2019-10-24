import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {RegisterForm} from './index';

const setUp = (props: any = {}) => {
    const component = shallow(<RegisterForm {...props} />);
    return component;
}


describe("RegisterForm Component", () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp({ 
            firstname: 'firstname',
            lastname: 'lastname',
            email: 'email',
            phone: 'phone',
            message: 'message'
        });
    })

    it ("Should render without errors", () => {
        
        // console.log(component.debug());

        expect(component).toBeDefined();

    })
})
