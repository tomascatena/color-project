import { Box, ThemeProvider } from '@mui/material';
import { BrowserRouter, } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import darkTheme from '../src/themes/darkTheme';
import lightTheme from '../src/themes/lightTheme';

export const parameters = {
  actions: { argTypesRegex: `^on[A-Z].*` },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: `fullscreen`,
  options: {
    storySort: (story, nextStory) => {
      const storyTitle = story[1].kind;
      const nextStoryTitle = nextStory[1].kind;

      const storyId = story[1].id;
      const nextStoryId = nextStory[1].id;

      if (storyTitle === nextStoryTitle) {
        return 0;
      } else {
        return storyId.localeCompare(nextStoryId, undefined, { numeric: true });
      }
    },
  },
  backgrounds: { disabled: true },
};

export const globalTypes = {
  theme: {
    title: `Theme`,
    description: `Global theme for components`,
    defaultValue: `dark`,
    toolbar: {
      icon: `lightning`,
      items: [`dark`, `light`],
    },
  },
};

const withReactRouter = (Story, context) => {
  return (
    <BrowserRouter>
      <Story {...context} />
    </BrowserRouter>
  );
};

const withMUIThemeProvider = (Story, context) => {
  const theme = context.globals.theme === `light` ? lightTheme : darkTheme;

  context.parameters.backgrounds = {
    ...context.parameters.backgrounds,
    values: [
      {
        name: context.globals.theme,
        value: theme.palette.background.default,
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: 3,
        }}
      >
        <Story {...context} />
      </Box>
    </ThemeProvider>
  );
};

export const decorators = [
  withReactRouter,
  withMUIThemeProvider
];
