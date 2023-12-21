import React, { useState,useEffect } from 'react';
import { View, TextInput, TextInputProps, TextStyle, Text } from 'react-native';
import { mainTextInputStyles } from './mainTextInputStyle.tsx';

interface MainTextInputProps extends TextInputProps {
  placeholder: string;
  textColor?: string;
  textSize?: number;
  hint?: string;
}

const MainTextInput: React.FC<MainTextInputProps> = ({ placeholder, textColor, textSize, hint, ...textInputProps }) => {
 
 
  const [isFocused, setIsFocused] = useState(false);
  const [dynamicStyles, setDynamicStyles] = useState 
   <TextStyle>({})


  useEffect(() => {
    const inputTextColor = textColor || mainTextInputStyles.input.color;
    const inputTextSize = textSize || mainTextInputStyles.input.fontSize;

    setDynamicStyles({
      color: inputTextColor,
      fontSize: inputTextSize,
    });

  }, [textColor, textSize]);

  const shouldShowHint = !textInputProps.value && isFocused && hint;

  return (
    <View>

      <TextInput
        style={[mainTextInputStyles.input, dynamicStyles]}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...textInputProps}
      />

      {shouldShowHint && <Text style={[mainTextInputStyles.hint,]}>{hint}</Text>}

    </View>
  );
};

export default MainTextInput;
