import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import useClickOutside from './useClickOutside';

describe(`useClickOutside`, () => {
  let container: HTMLDivElement;
  let callback: jest.Mock;

  beforeEach(() => {
    container = document.createElement(`div`);
    document.body.appendChild(container);
    callback = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it(`should call the callback when the mousedown event is triggered outside the ref`, () => {
    renderHook(() => {
      const ref = React.useRef<HTMLDivElement>(container);
      useClickOutside(ref, callback);
      return { ref };
    });

    act(() => {
      document.dispatchEvent(new MouseEvent(`mousedown`));
    });

    expect(callback).toHaveBeenCalled();
  });

  it(`should not call the callback when the mousedown event is triggered inside the ref`, () => {
    renderHook(() => {
      const ref = React.useRef<HTMLDivElement>(container);
      useClickOutside(ref, callback);
      return { ref };
    });

    act(() => {
      container.dispatchEvent(new MouseEvent(`mousedown`));
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
