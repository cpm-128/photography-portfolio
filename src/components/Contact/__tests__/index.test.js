import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

// remove memory after each test
afterEach(cleanup);

// declare the component being tested (it and test are interchangeable)
describe('Contact component', () => {

    // 1st test: baseline to verify the component is rendering
    test('renders', () => {
        render(<Contact />);
    });

    // 2nd test: compare snapshot to DOM node structure
    test('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })

})

// declare the component being tested: H1 MATCHES CONTACT ME + BUTTON MATCHES SUBMIT
describe('Fields are populated with correct text', () => {

    test('h1 matches "contact me"', () => {
        const { getByTestId } = render(<Contact></Contact>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });

    test('button matches "submit"', () => {
        const { getByTestId } = render(<Contact></Contact>);
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit');
    });
})