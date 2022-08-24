import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = {
    name: 'portraits',
    description: 'Portraits of people in my life'
};

afterEach(cleanup)

describe('Gallery is rendering', () => {

    // 1st test: baseline to verify the component is rendering
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    // 2nd test: compare snapshot to DOM node structure
    test('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />);
        expect(asFragment()).toMatchSnapshot();
    });

})

// declare the component being tested: H1 MATCHES CATEGORY
describe('gallery name', () => {
    test('h1 matches category of "portraits"', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />);

        expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
    });
})