import React from 'react';
import clsx from 'clsx';
import styled, { ThemeProvider } from 'styled-components/macro';

import { IAppProps } from './App.typings';
import CssBaseline from 'src/components/CssBaseline';
import RootPage from 'src/pages/RootPage';
import theme from 'src/theme';

const App: React.FC<IAppProps> = ({ className }) => (
  <div className={clsx('App-root', className)} data-testid="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootPage />
    </ThemeProvider>
  </div>
);

const StyledApp = styled(App)`
  &.App-root {
    height: 100vh;
  }
`;

export default StyledApp;
