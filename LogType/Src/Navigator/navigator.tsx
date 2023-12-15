import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogScreen, SignupScreen, SplashScreen, Image, AppbarImage } from '../Imports/imports';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0.6,
            borderColor: '#fff',
            borderBottomWidth: 3,
            borderTopWidth: 3,
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30,
            fontFamily: 'Arial',
            textAlign: 'center',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Image
              source={AppbarImage}
              style={{ flex: 1, width: '300%', height: '100%', resizeMode: 'cover' }}
            />
          ),
        }}
      > 
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Log-in" component={LogScreen} />
        <Stack.Screen name="Sign up" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
