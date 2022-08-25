import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

// declare the props
const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Pug smile',
    category: 'portraits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 3
};

afterEach(cleanup);

describe('Modal is rendering', () => {

    // 1st test: baseline to verify the component is rendering
    test('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    });

    // 2nd test: compare snapshot to DOM node structure
    test('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        expect(asFragment()).toMatchSnapshot();
    })

})

describe('click event', () => {
    test('calls onClose handler', () => {
        // Arrange: Render Modal
            const { getByText } = render(<Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
            />);
        // Act: Simulate click event
            fireEvent.click(getByText('Close this modal'));
        // Assert: expected matcher
            expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})