import React, { useState } from 'react';
import { NavigationContainer, createStackNavigator, View, Text, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform, Image, 
  AppbarImage, useNavigation, useState as useStateImport, backgroundImage, navigatorStyles, signupScreenStyles  } from '../Imports/imports';

import { logScreenStyles } from '../Styles/logScreenStyles';

import  MainTextInput  from '../Components/mainTextInput'; 

const LogScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useStateImport<string>('');
  const [email, setEmail] = useStateImport<string>('');
  const [password, setPassword] = useStateImport<string>('');

  const handleLogin = () => {
    try {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during login:', error);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ImageBackground source={backgroundImage} style={logScreenStyles.backgroundImage}>
        <View style={logScreenStyles.container}>

        <MainTextInput
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <MainTextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <MainTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

          <TouchableOpacity style={logScreenStyles.buttonL as any} onPress={handleLogin}>
            <Text style={logScreenStyles.buttonText as any }>Logina</Text>
          </TouchableOpacity>

          <Text style={logScreenStyles.signup as any }>Don't have an account?</Text>

          <TouchableOpacity style={logScreenStyles.buttonS as any} onPress={() => navigation.navigate('Sign up' as never)}>
            <Text style={logScreenStyles.buttonText as any}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LogScreen;
