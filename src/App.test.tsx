import { act, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App tests', () => {
  it('should contain the app logo', async () => {
    render(<App />);

    await act(() => {
      const logoText = screen.getByText(/app logo/i);
      expect(logoText).toBeInTheDocument();
    });
  });
});
