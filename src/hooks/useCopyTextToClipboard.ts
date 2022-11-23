import React from 'react';

export const useCopyTextToClipboard = () => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyTextToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      document.execCommand(`copy`, true, text); // To support older browsers like IE
    }

    setIsCopied(true);
  };

  React.useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return {
    isCopied,
    copyTextToClipboard
  };
};
