import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';
import ImageContainer from '../../Components/ImageContainer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const loginUser = () => {
    if (!email || !password) {
      ToastAndroid.show('Please enter both email and password', ToastAndroid.SHORT);
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        ToastAndroid.show('User successfully Logged In', ToastAndroid.SHORT);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          ToastAndroid.show('Credentials are incorrect', ToastAndroid.SHORT);
        } else {
          console.error(error);
          ToastAndroid.show('Login failed. Please try again', ToastAndroid.SHORT);
        }
      });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    loginTextContainer: {
      marginVertical: hp(2),
      marginHorizontal: wp(5),
    },
    loginText: {
      color: 'black',
      fontSize: wp(6),
      fontWeight: 'bold',
    },
    forgotPasswordContainer: {
      flexDirection: 'row-reverse',
      marginVertical: 0,
      marginHorizontal: wp(6),
    },
    forgotPasswordText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: wp(3.8)
    },
    footerContainer: {
      marginTop: hp(3),
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
      bottom: hp(1),
    },
    footerText: {
      color: 'black',
      fontWeight: '500',
      fontSize: wp(3.8)
    },
    signupText: {
      color: 'grey',
      marginLeft: wp(2),
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageContainer path={require('../../assets/images/loginImage.png')} onPress={() => navigation.goBack()} imageheight={wp(78)} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log in</Text>
          <InputField
            label={'Enter Email'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <InputField
            label={'Enter password'}
            type={'password'}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: hp(2), paddingHorizontal: wp(5) }}>
          <CustomButton label={'Login'} showGoogleIcon={false} onPress={loginUser} />
          <Text style={{ textAlign: 'center', marginVertical: hp(1), fontWeight: 'bold', color: 'black' }}>OR</Text>
          <CustomButton label={'Continue with Google'} showGoogleIcon={true} backgroundColor={'#D9D9D9'} textColor={'black'} />
        </View>
        <View style={styles.footerContainer}>

          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('SignUp'); }}
            activeOpacity={0.7}
          >
            <Text style={styles.signupText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
};

export default LoginScreen;
