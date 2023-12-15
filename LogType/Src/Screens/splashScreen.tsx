import React, { useEffect } from 'react';
import {
  NavigationContainer,
  createStackNavigator,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  AppbarImage,
  useState,
  backgroundImage,
  useNavigation,

  
  useEffect as useEffectImport,
 
  
} from '../Imports/imports';

import { splashScreenStyles } from '../Styles/splashScreenStyles';

import LottieView from 'lottie-react-native';
import {LOG_IN} from '../Navigator/constonts'

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffectImport(() => {
    setTimeout(() => {
      navigation.navigate(LOG_IN as never );
    }, 3000);
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={splashScreenStyles.backgroundImage}>
      <LottieView
        source={require('../Images/logo1.json')}
        autoPlay
        loop
        style={splashScreenStyles.logoImage as any}
      />
    </ImageBackground>
  );
};

export default SplashScreen;
