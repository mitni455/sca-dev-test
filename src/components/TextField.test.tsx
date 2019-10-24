import React, { Component } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextField from './TextField';

const setUp = (props: any = {}) => {
    const component = shallow(<TextField {...props}/>);
    return component;
}

describe("Email Component", () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp({field : { type : "text", name: "test", label : "Test"}, form: {touched: false }});
    })

    it ("Should render without errors", () => {
        let forwardRefWrapper = component.dive();
        
        expect(forwardRefWrapper.prop('type')).toBe("text");
        expect(forwardRefWrapper.prop('name')).toBe("test");
        expect(forwardRefWrapper.prop('label')).toBe("Test");
    })
    

})
 