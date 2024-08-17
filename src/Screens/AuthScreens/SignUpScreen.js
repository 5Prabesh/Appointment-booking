import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import ImageContainer from '../../Components/ImageContainer';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePress = () => {
    if (password !== confirmPassword) {
      ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
      return;
    }
    createUser();
  };

  const createUser = () => {
    if (!email || !password) {
      ToastAndroid.show('Please enter both email and password', ToastAndroid.SHORT);
      return;
    }
  
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed up!');
        ToastAndroid.show('User successfully signed up', ToastAndroid.SHORT);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          ToastAndroid.show('Credentials are incorrect', ToastAndroid.SHORT);
        } else {
          console.error(error);
          ToastAndroid.show('Sign up failed. Please try again', ToastAndroid.SHORT);
        }
      });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    signUpTextContainer: {
      margin: wp(4),
    },
    signUpText: {
      color: 'black',
      fontSize: wp(6),
      fontWeight: 'bold',
    },
    termsText: {
      color: 'grey',
      marginLeft: 20
    },
    termsHighlight: {
      color: 'black',
      fontWeight: 'bold',
    },
    buttonContainer: {
      marginTop: hp(3),
    },
    policyContainer:{
      marginTop: 0,
    },
    loginContainer: {
      marginTop: hp(3),
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
      bottom: hp(1),
    },
    loginText: {
      color: 'black',
      fontWeight: 'bold',
    },
    loginButton: {
      color: 'grey',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageContainer path={require('../../assets/images/signUpImage.png')} onPress={() => navigation.goBack()} imageheight={hp(40)} />
      <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
        <View>
          <View style={styles.signUpTextContainer}>
            <Text style={styles.signUpText}>Sign up</Text>
            <InputField 
              label={'Enter email address'} 
              value={email}
              onChangeText={text => setEmail(text)} 
            />
            <InputField 
              label={'Enter password'} 
              type={'password'} 
              value={password}
              onChangeText={text => setPassword(text)} 
            />
            <InputField 
              label={'Confirm password'} 
              type={'password'} 
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)} 
            />
          </View>
        </View>
        <View>
          <View style={styles.policyContainer}>
            <Text style={styles.termsText}>
              By signing up, you agree to our <Text style={styles.termsHighlight}>Terms, Conditions{'\n'}</Text> and <Text style={styles.termsHighlight}>Policies.</Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton label={'Continue'} onPress={handlePress} backgroundColor={'#31493C'} textColor={'#FFD700'}/>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.4}
            >
              <Text style={styles.loginButton}>
                {'\t'}Log in 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
