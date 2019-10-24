/**
 * @jest-environment node
 */
import 'jest';
import { shallow } from "enzyme";
import React from "react";

/**
 * @hack to suppress intellisense warning - this is already taken care of jest.setup.ts already
 */
// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';
// configure({adapter: new Adapter()});


import HomePage from "./HomePage";

describe("HomePage", () => {

    const page = shallow(<HomePage />);

    it('should have rendered Register Form', () => {

        // expect(page.find('h1').text()).toEqual('Subscribe');

    });
    it('should have rendered Register Form', () => {
        const page = shallow(<HomePage />);
        
        expect(page.find('RegisterFormik')).toBeDefined();
    });
});