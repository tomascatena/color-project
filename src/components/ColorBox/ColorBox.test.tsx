import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import {
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import ColorBox from './ColorBox';
import React from 'react';

Object.defineProperty(navigator, `clipboard`, {
  value: {
    writeText: () => { },
  },
});

const MOCK_COLOR = {
  hex: `#064cd5`,
  id: `merchantmarineblue`,
  level: 500,
  name: `MerchantMarineBlue 500`,
};
const MOCK_TIMEOUT = 1500;

jest.useFakeTimers();

describe(`ColorBox`, () => {
  jest.spyOn(navigator.clipboard, `writeText`);

  beforeAll(() => {
    navigator.clipboard.writeText = jest.fn();
  });

  test(`renders the correct styles when the copy button is clicked`, () => {
    render(
      <BrowserRouter>
        <ColorBox
          backgroundColor={MOCK_COLOR.hex}
          colorName={MOCK_COLOR.name}
          colorId={MOCK_COLOR.id}
          paletteId={MOCK_COLOR.id}
          isColorShade={true}
          shouldPlaySound={true}
        />
      </BrowserRouter>
    );

    const copyButton = screen.getByText(/copy/i);

    expect(copyButton).toBeInTheDocument();

    const copyOverlay = screen.getByTestId(`copy-overlay`);
    const copyMessage = screen.getByTestId(`copy-message`);

    expect(copyOverlay).not.toHaveClass(`showCopyOverlay`);
    expect(copyMessage).not.toHaveClass(`showCopyMessage`);

    expect(copyOverlay).toBeInTheDocument();
    expect(copyMessage).toBeInTheDocument();

    fireEvent.click(copyButton);

    expect(copyOverlay).toHaveClass(`showCopyOverlay`);
    expect(copyMessage).toHaveClass(`showCopyMessage`);

    act(() => {
      jest.advanceTimersByTime(MOCK_TIMEOUT);
    });

    expect(copyOverlay).not.toHaveClass(`showCopyOverlay`);
    expect(copyMessage).not.toHaveClass(`showCopyMessage`);
  });
});
