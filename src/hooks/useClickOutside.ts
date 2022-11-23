import React from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener(`mousedown`, handleClick);

    return () => {
      document.removeEventListener(`mousedown`, handleClick);
    };
  });
};

export default useClickOutside;
