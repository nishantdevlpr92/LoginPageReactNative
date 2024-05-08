import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {InputField} from './commonComponent/InputField';
import {isEmpty, validateEmail} from './Config/validation';

function App(): JSX.Element {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailErrmsg, setEmailErrmsg] = useState('');
  const [passwordErrMsg, setPasswordErrmsg] = useState('');
  const clearWarnings = () => {
    setEmailErrmsg('');
    setPasswordErrmsg('');
  };
  const validateInput = () => {
    clearWarnings();
    if (isEmpty(userEmail)) {
      setEmailErrmsg('Please enter email address');
    }
    if (isEmpty(userPassword)) {
      setPasswordErrmsg('Please enter password');
    }

    if (!validateEmail(userEmail)) {
      setEmailErrmsg('Please enter valid email address');
    }
    if (userPassword.length < 6) {
      setPasswordErrmsg('Password must be of atleast 6 characters');
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welComeText}>Welcome to Rize</Text>
          <Text style={styles.loginText}>Login to your account</Text>
        </View>

        <View style={styles.inputContainer}>
          <InputField
            feildLabel={'Email ID'}
            handleChange={setUserEmail}
            errorMsg={emailErrmsg}
          />
          <InputField
            feildLabel={'Password'}
            secureTextEntry={true}
            handleChange={setUserPassword}
            errorMsg={passwordErrMsg}
          />
        </View>
        <View style={styles.loginBtnContainer}>
          <TouchableOpacity
            disabled={userEmail.length == 0 || userPassword.length == 0}
            onPress={validateInput}
            style={[
              styles.loginContainer,
              {
                backgroundColor: `${
                  userEmail.length == 0 || userPassword.length == 0
                    ? 'lightgrey'
                    : 'grey'
                }`,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  loginText: {
    fontSize: 18,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    height: '30%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputContainer: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnContainer: {
    height: '30%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welComeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  loginContainer: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
