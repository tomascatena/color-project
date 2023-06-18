import { Box, ThemeProvider } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import themes from '@/themes/themeConfig';

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
    defaultValue: `light`,
    toolbar: {
      icon: `lightning`,
      items: Object.keys(themes), // This will be ['dark', 'light']
    },
  },
};

const withReactRouter = (Story, context) => {
  return (
    <MemoryRouter>
      <Story {...context} />
    </MemoryRouter>
  );
};

const withMUIThemeProvider = (Story, context) => {
  const themeName = context.globals.theme;
  const theme = themes[themeName]; // This will choose the correct theme based on the name

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

      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Story {...context} />
      </Box>
    </ThemeProvider>
  );
};

export const decorators = [
  withReactRouter,
  withMUIThemeProvider
];
