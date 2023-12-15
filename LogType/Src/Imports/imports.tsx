import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform, } from 'react-native';

import LogScreen from '../Screens/logScreen';
import SignupScreen from '../Screens/signupScreen';
import SplashScreen from '../Screens/splashScreen';
import AppbarImage from '../Images/Appbar.png';

import backgroundImage from '../Images/Background.png';
import { useNavigation } from '@react-navigation/native';

import { navigatorStyles } from '../Styles/navigatorStyles';
import { logScreenStyles } from '../Styles/logScreenStyles';
import { signupScreenStyles } from '../Styles/signupScreenStyles';
import { splashScreenStyles } from '../Styles/splashScreenStyles';




export {
  React,
  NavigationContainer,
  createStackNavigator,
  LogScreen,
  SignupScreen,
  Image,
  AppbarImage,
  useState,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useNavigation,
  backgroundImage,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  navigatorStyles,
  logScreenStyles,
  signupScreenStyles,
  SplashScreen,
  useEffect,
  splashScreenStyles,
  
};
