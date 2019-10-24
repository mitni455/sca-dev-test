import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FirstName from './FirstName';

const setUp = (props: any = {}) => {
    const component = shallow(<FirstName {...props} />);
    return component;
}


describe("FirstName Component", () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp();
    })

    it ("Should render without errors", () => {
        expect(component.prop("type")).toBe("text");
        expect(component.prop("name")).toBe("firstname");
        expect(component.prop("label")).toBe("First Name");
    })
})
