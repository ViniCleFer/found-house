import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import SplashScreen from './pages/SplashScreen';

import {theme} from './styles/theme';

// import { Container } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
};

export default App;
