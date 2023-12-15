// MainTextInput.tsx

import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { mainTextInputStyles } from './mainTextInputStyle.tsx';

interface MainTextInputProps extends TextInputProps {
  placeholder: string;
  textColor?: string;

}

const MainTextInput: React.FC<MainTextInputProps> = ({ placeholder,textColor, ...textInputProps  }) => {
  const inputTextColor = textColor || mainTextInputStyles.input.color;
  
  return (
    <View>
      <TextInput
        style={[mainTextInputStyles.input, { color: inputTextColor }]}
        placeholder={placeholder}
        {...textInputProps}
      />
    </View>
  );
};

export default MainTextInput;
