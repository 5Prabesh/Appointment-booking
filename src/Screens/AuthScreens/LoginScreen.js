import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';

const LoginScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: { flex: 1 },
    imageStyle: {
      height: height * 0.4,
      width: width,
    },
    backIcon: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    backText: {
      color: 'black',
      fontSize: 15,
      marginLeft: 4,
      fontWeight: 'bold',
    },
    backButtonContainer: {
      flexDirection: 'row',
      margin: 10
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
    footerContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop: 15,
      justifyContent:'center'
    },
    footerText: {
      color:'black',
      fontWeight:'500'
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <View>
        <ImageBackground source={require('../../assets/images/loginImage.png')} style={styles.imageStyle}>

          <TouchableOpacity
            style={styles.backButtonContainer}
            activeOpacity={0.4}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name={'chevron-left'} style={styles.backIcon} />
            <Text style={styles.backText}>
              Back
            </Text>
          </TouchableOpacity>

        </ImageBackground>
      </View>
      <ScrollView>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>
            Log in
          </Text>
          <InputField label={'Enter Email'} />
          <InputField label={'Enter password'} type={'password'} />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
          >
            <Text style={styles.forgotPasswordText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <CustomButton label={'Login'} showGoogleIcon={false} />
          <Text style={{ textAlign: 'center', margin: 5, fontWeight: 'bold', color: 'black' }}>OR</Text>
          <CustomButton label={'Continue with Google'} showGoogleIcon={true} backgroundColor={'#D9D9D9'} textColor={'black'}/>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Don't have an account? 
          </Text>
          <TouchableOpacity 
          onPress={()=>{navigation.navigate('SignUp')}}
          activeOpacity={0.7}
          >
            <Text>
              {'\t'}SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
