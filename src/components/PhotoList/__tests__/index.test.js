import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup)

describe('PhotoList is rendering', () => {

    // 1st test: baseline to verify the component is rendering
    test('renders', () => {
        render(<PhotoList />);
    });

    // 2nd test: compare snapshot to DOM node structure
    test('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<PhotoList />);
        expect(asFragment()).toMatchSnapshot();
    });

})