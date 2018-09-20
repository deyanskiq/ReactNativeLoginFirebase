import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style= {containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      value= {value}
      onChangeText={onChangeText}
      style={inputStyle}
      />
    </View>
  )
};
//flex: 2 and flex: 1 - > input will allocate 2/3 from the space and label 1/3
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignIems: 'center'
  }
}
export { Input };