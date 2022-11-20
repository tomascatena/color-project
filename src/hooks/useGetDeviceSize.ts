import { breakpoints } from '@/themes/baseTheme/breakpoints';
import { useDebouncedCallback } from 'use-debounce';
import React from 'react';

const useGetDeviceSeize = () => {
  const [deviceSize, setDeviceSize] = React.useState(window.innerWidth);

  const debounced = useDebouncedCallback(() => setDeviceSize(window.innerWidth), 50);

  React.useEffect(() => {
    window.addEventListener('resize', debounced);

    return () => {
      window.removeEventListener('resize', debounced);
    };
  }, [debounced]);

  const isMobile = deviceSize < breakpoints.values!.sm;
  const isTablet = deviceSize >= breakpoints.values!.sm && deviceSize < breakpoints.values!.md;
  const isDesktop = deviceSize >= breakpoints.values!.md && deviceSize < breakpoints.values!.xl;
  const isLargeDesktop = deviceSize >= breakpoints.values!.xl;

  console.log({
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};

export default useGetDeviceSeize;
