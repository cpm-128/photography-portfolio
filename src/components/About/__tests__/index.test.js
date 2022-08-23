import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// remove memory after each test
afterEach(cleanup);

// declare the component being tested (it and test can be used interchangeably)
describe('About component', () => {

    // 1st test: baseline to verify the component is rendering
    test('renders', () => {
        render(<About />);
    });

    // 2nd test: compare snapshot version ofj the DOM node structure
    it('matches snapshot DOM node scrcture', () => {
        // snapshot = rendered about, compare for a match
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})