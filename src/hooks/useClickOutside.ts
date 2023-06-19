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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array as useEffect's second argument for cleanup
};

export default useClickOutside;
