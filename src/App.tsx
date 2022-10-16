import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CustomBackdrop from '@/components/CustomBackdrop/CustomBackdrop';
import PalettePageRoute from '@/routes/PalettePageRoute';
import React from 'react';
import lightTheme from '@/themes/lightTheme';

// Lazy load Pages
const PalettesListPageAsync = React.lazy(() => import('@/pages/PalettesListPage/PalettesListPage'));

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        <React.Suspense
          fallback={
            <CustomBackdrop
              isOpen
              message='Loading...'
            />
          }
        >
          <Routes>
            <Route
              path="/"
              element={<PalettesListPageAsync />}
            />

            <Route
              path="/palettes/:paletteId"
              element={<PalettePageRoute />}
            />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter >
  );
};

export default App;
