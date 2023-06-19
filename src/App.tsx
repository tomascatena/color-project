import './App.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ColorPalette } from '@/@types/typings';
import { Route, Routes, useLocation } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import seedPalettes from '@/data/seedPalettes';

const NewPalettePage = lazy(() => import(`@/pages/NewPalettePage/NewPalettePage`));
const PalettePageRoute = lazy(() => import(`@/routes/PalettePageRoute`));
const PalettesListPage = lazy(() => import(`@/pages/PalettesListPage/PalettesListPage`));
const SingleColorPageRoute = lazy(() => import(`@/routes/SingleColorPageRoute`));

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
    <div className='page-wrapper'>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames='page'
        >
          <div className="page">
            <Suspense fallback={<div>Loading...</div>}>
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
                  element={<PalettePageRoute palettes={palettes} />}
                />

                <Route
                  path="/palettes/:paletteId/:colorId"
                  element={<SingleColorPageRoute palettes={palettes} />}
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
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
