import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// remove memory after each test
afterEach(cleanup);

// declare the component being tested (it and test are interchangeable)
describe('Nav component', () => {

    // 1st test: baseline to verify the component is rendering
    test('renders', () => {
        render(<Nav />);
    });

    // 2nd test: compare snapshot to DOM node structure
    test('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    })

})