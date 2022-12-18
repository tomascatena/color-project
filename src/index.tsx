import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import CustomBackdrop from '@/components/CustomBackdrop/CustomBackdrop';
import React from 'react';
import ReactDOM from 'react-dom/client';
import lightTheme from '@/themes/lightTheme';

const root = ReactDOM.createRoot(
  document.getElementById(`root`) as HTMLElement
);

root.render(
  <Router>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <React.Suspense
        fallback={
          <CustomBackdrop
            isOpen
            message='Loading page...'
          />
        }
      ></React.Suspense>
      <App />
    </ThemeProvider>
  </Router >
);
