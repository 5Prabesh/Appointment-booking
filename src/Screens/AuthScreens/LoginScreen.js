import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, StatusBar,ToastAndroid } from 'react-native';
import React,{useState} from 'react';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';
import ImageContainer from '../../Components/ImageContainer';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const loginUser = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        ToastAndroid.show('User seccessfully LoggedIn', ToastAndroid.SHORT)
      })
      .catch(error => {
        // if (error.code === 'auth/email-already-in-use') {
        //     console.log('That email address is already in use!');
        // }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          ToastAndroid.show('Credentials are incorrect', ToastAndroid.SHORT)
        }

        console.error(error);
      });
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        // paddingTop: StatusBar.currentHeight
      },
      loginTextContainer: {
        margin: 15
      },
      loginText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
      },
      forgotPasswordContainer: {
        flexDirection: 'row-reverse',
        marginEnd: 40,
      },
      forgotPasswordText: {
        color: 'black',
        fontWeight: 'bold',
      },
      footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
      },
      footerText: {
        color: 'black',
        fontWeight: '500'
      }
    })

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

        <ImageContainer path={require('../../assets/images/loginImage.png')} onPress={() => navigation.goBack()} />

        <ScrollView style>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>
              Log in
            </Text>
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
              <Text style={styles.forgotPasswordText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <CustomButton label={'Login'} showGoogleIcon={false} onPress={loginUser}/>
            <Text style={{ textAlign: 'center', margin: 4, fontWeight: 'bold', color: 'black' }}>OR</Text>
            <CustomButton label={'Continue with Google'} showGoogleIcon={true} backgroundColor={'#D9D9D9'} textColor={'black'} />
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('SignUp') }}
              activeOpacity={0.7}
            >
              <Text style={{ color: 'grey' }}>
                {'\t'}SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

export default LoginScreen;
