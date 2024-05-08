import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

export const InputField = ({feildLabel, handleChange, secureTextEntry,errorMsg}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        <Text>{feildLabel}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={`Enter your ${feildLabel}`}
          onChangeText={handleChange}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {errorMsg && <Text style={styles.error}>{errorMsg}</Text> }
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: 50,
    width: '80%',
    alignSelf: 'center',
    marginVertical:20
  },
  labelContainer: {
    height: 'auto',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom:5
  },
  inputContainer: {
    height: 50,
    width: '100%',
  },
  textInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal:15,
    backgroundColor: '#F5F5F5',
    borderColor:"grey",
    borderWidth:1,
    borderRadius: 50,   
  },
  error:{
    color:'red'
  }
});
