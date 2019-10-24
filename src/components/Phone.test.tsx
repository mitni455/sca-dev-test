import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Phone from './Phone';

const setUp = (props: any = {}) => {
    const component = shallow(<Phone {...props} />);
    return component;
}


describe("Phone Component", () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp();
    })

    it ("Should render without errors", () => {
        expect(component.prop("type")).toBe("text");
        expect(component.prop("name")).toBe("phone");
        expect(component.prop("label")).toBe("Mobile Phone");
    })
})
