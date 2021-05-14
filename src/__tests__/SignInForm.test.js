import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../components/SignInForm';

const mockOnSubmit = jest.fn();

describe('SignInForm', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const { getByTestId } = render(<SignInForm onSubmit={mockOnSubmit} />);
    const username = 'kalle';
    const password = 'password';

    fireEvent.changeText(getByTestId('sign-in-username'), username);
    fireEvent.changeText(getByTestId('sign-in-password'), password);
    fireEvent.press(getByTestId('sign-in-button'));
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({ username, password });
    });
  });
});