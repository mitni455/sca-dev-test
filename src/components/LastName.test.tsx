import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LastName from './LastName';

const setUp = (props: any = {}) => {
    const component = shallow(<LastName {...props} />);
    return component;
}


describe("LastName Component", () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp();
    })

    it ("Should render without errors", () => {
        expect(component.prop("type")).toBe("text");
        expect(component.prop("name")).toBe("lastname");
        expect(component.prop("label")).toBe("Last Name");
    })
})
