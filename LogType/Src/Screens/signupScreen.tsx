import React, { useState } from 'react';
import {
  View,
  Text,
 
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  useState as useStateImport,
  backgroundImage,
  useNavigation,
} from '../Imports/imports';

import {LOG_IN} from '../Navigator/constonts'

import { signupScreenStyles } from '../Styles/signupScreenStyles';
import  MainTextInput  from '../Components/mainTextInput'; 






const SignupScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useStateImport<string>('');
  const [email, setEmail] = useStateImport<string>('');
  const [password, setPassword] = useStateImport<string>('');





  const handleSignup = () => {
    try {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during signup:', error);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ImageBackground source={backgroundImage} style={signupScreenStyles.backgroundImage}>
        <View style={signupScreenStyles.container as any} >
        
        
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
           <MainTextInput
          placeholder="Confirm your Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        

          <TouchableOpacity style={signupScreenStyles.buttonS as any} onPress={handleSignup}>
            <Text style={signupScreenStyles.buttonText as any}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={signupScreenStyles.signup as any}>Already have an account?</Text>
          <TouchableOpacity style={signupScreenStyles.buttonL as any} onPress={() => navigation.navigate( LOG_IN as never ) }>
            <Text style={signupScreenStyles.buttonText as any}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
