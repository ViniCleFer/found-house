import React from 'react';
import {StatusBar} from 'react-native';

import {SectionView, SectionImage} from './styles';

import logo from './assets/logo.png';

const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={logo} resizeMode="contain" />
    </SectionView>
  );
};

export default SplashScreen;
