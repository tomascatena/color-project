import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorPalette } from '@/@types/typings';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CustomBackdrop from '@/components/CustomBackdrop/CustomBackdrop';
import PalettePageRoute from '@/routes/PalettePageRoute';
import React from 'react';
import SingleColorPageRoute from '@/routes/SingleColorPageRoute';
import lightTheme from '@/themes/lightTheme';
import seedPalettes from '@/data/seedPalettes';

// Lazy load Pages
const PalettesListPageAsync = React.lazy(() => import(`@/pages/PalettesListPage/PalettesListPage`));
const NewPalettePageAsync = React.lazy(() => import(`@/pages/NewPalettePage/NewPalettePage`));

const App = () => {
  const savedPalettes = JSON.parse(localStorage.getItem(`palettes`) || `[]`);

  const [palettes, setPalettes] = React.useState<ColorPalette[]>(savedPalettes.length ? savedPalettes : seedPalettes);

  const savePalette = (newPalette: ColorPalette) => {
    setPalettes(() => {
      const updatedPalettes = [...palettes, newPalette];

      localStorage.setItem(`palettes`, JSON.stringify(updatedPalettes));

      return updatedPalettes;
    });
  };

  const removePalette = (paletteId: string) => {
    setPalettes(() => {
      const updatedPalettes = palettes.filter((palette) => palette.id !== paletteId);

      localStorage.setItem(`palettes`, JSON.stringify(updatedPalettes));

      return updatedPalettes;
    });
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        <React.Suspense
          fallback={
            <CustomBackdrop
              isOpen
              message='Loading page...'
            />
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <PalettesListPageAsync
                  removePalette={removePalette}
                  palettes={palettes}
                />
              }
            />

            <Route
              path="/palettes/:paletteId"
              element={
                <PalettePageRoute palettes={palettes} />
              }
            />

            <Route
              path="/palettes/:paletteId/:colorId"
              element={
                <SingleColorPageRoute palettes={palettes} />
              }
            />

            <Route
              path="/new-palette"
              element={
                <NewPalettePageAsync
                  palettes={palettes}
                  savePalette={savePalette}
                />
              }
            />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter >
  );
};

export default App;
