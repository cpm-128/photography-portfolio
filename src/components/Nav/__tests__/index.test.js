import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    {
        name: 'portraits',
        description: 'Portraits of people in my life'
    }
]

// declare the props
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// remove memory after each test
afterEach(cleanup);

// declare the component being tested (it and test are interchangeable)
describe('Nav component', () => {

    // 1st test: baseline to verify the component is rendering
    test('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
    });

    // 2nd test: compare snapshot to DOM node structure
    test('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        expect(asFragment()).toMatchSnapshot();
    })

})

// declare the component being tested: CAMERA EMOJI
describe('Camera emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        // these labels come from Nav>index.js
        const { getByLabelText } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// declare the component being tested: LINKS ARE VISIBLE
describe('Links are visible', () => {
    test('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})