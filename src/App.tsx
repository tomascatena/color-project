import './App.scss';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import { ColorPalette } from '@/@types/typings';
import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import NewPalettePage from '@/pages/NewPalettePage/NewPalettePage';
import PalettePageRoute from '@/routes/PalettePageRoute';
import PalettesListPage from '@/pages/PalettesListPage/PalettesListPage';
import React from 'react';
import SingleColorPageRoute from '@/routes/SingleColorPageRoute';
import seedPalettes from '@/data/seedPalettes';

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

  const location = useLocation();

  return (
    <Routes location={location}>
      <Route
        path='*'
        element={
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames='page'
            >
              <Routes location={location}>
                <Route
                  path="/"
                  element={
                    <PalettesListPage
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
                    <NewPalettePage
                      palettes={palettes}
                      savePalette={savePalette}
                    />
                  }
                />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        }
      >
      </Route>
    </Routes>
  );
};

export default App;
