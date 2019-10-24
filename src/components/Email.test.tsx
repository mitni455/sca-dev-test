import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Email from './Email';

const setUp = (props: any = {}) => {
    const component = shallow(<Email {...props} />);
    return component;
}


describe("Email Component", () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp();
    })

    it ("Should render without errors", () => {
        expect(component.prop("type")).toBe("email");
        expect(component.prop("name")).toBe("email");
        expect(component.prop("label")).toBe("Email");
    })
})
