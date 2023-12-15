// MainTextInput.tsx

import React from 'react';
import { View, TextInput, TextInputProps, TextStyle } from 'react-native';
import { mainTextInputStyles } from './mainTextInputStyle.tsx';

interface MainTextInputProps extends TextInputProps {
  placeholder: string;
  textColor?: string;
  textSize?: number; 
}

const MainTextInput: React.FC<MainTextInputProps> = ({ placeholder, textColor, textSize, ...textInputProps }) => {
  const inputTextColor = textColor || mainTextInputStyles.input.color;
  const inputTextSize = textSize || mainTextInputStyles.input.fontSize;

  const dynamicStyles: TextStyle = {
    color: inputTextColor,
    fontSize: inputTextSize,
  };

  return (
    <View>
      <TextInput
        style={[mainTextInputStyles.input, dynamicStyles]}
        placeholder={placeholder}
        {...textInputProps}
      />
    </View>
  );
};

export default MainTextInput;
