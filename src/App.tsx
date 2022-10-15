import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CustomBackdrop from '@/components/CustomBackdrop/CustomBackdrop';
import React from 'react';
import lightTheme from '@/themes/lightTheme';

// Lazy load Pages
const HomePageAsync = React.lazy(() => import('./pages/HomePage/HomePage'));

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        <Container maxWidth="xl">
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
                element={<HomePageAsync />}
              />
            </Routes>
          </React.Suspense>
        </Container>
      </ThemeProvider>
    </BrowserRouter >
  );
};

export default App;
