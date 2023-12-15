import { StyleSheet, Dimensions } from 'react-native';

export const mainTextInputStyles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 40, 
    height: 50,
    borderColor: '#105',
    borderWidth: 3,
    marginBottom: 35,
    paddingLeft: 80,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20,
    color: '#105',
  },

  hint:{
    position: 'absolute',
    marginTop: -20,
    marginLeft: 30,
    color:'white'
  }
});
