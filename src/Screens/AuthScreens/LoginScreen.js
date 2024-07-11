import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InputField from '../../Components/InputField';

const LoginScreen = ({navigation}) => {
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    imageStyle: {
      height: height / 2,
      width: width,
    },
    backIcon: {
      fontSize: 20,
      fontWeight:'bold',
      color: 'black'
    },
    backText: {
      color: 'black',
      fontSize: 15,
      marginLeft: 4,
      fontWeight:'bold'
    },
    backButtonContainer: {
      flexDirection: 'row',
      margin: 10
    },
    loginTextContainer:{
      margin: 15
    },
    loginText:{
      color:'black',
      fontSize: 25,
      fontWeight:'bold',
    }
  })

  return (
    <View>
      <View>
        <ImageBackground source={require('../../assets/images/loginImage.png')} style={styles.imageStyle}>

          <TouchableOpacity 
          style={styles.backButtonContainer}
          activeOpacity={0.4}
          onPress={()=>navigation.goBack()}
          >
            <FontAwesome5 name={'chevron-left'} style={styles.backIcon} />
            <Text style={styles.backText}>
              Back
            </Text>
          </TouchableOpacity>

        </ImageBackground>
      </View>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>
          Log in
        </Text>
      </View>
      <InputField label={'Enter Email'}/>
      <InputField label={'Enter password'} type={'password'}/>
    </View>
  );
};



export default LoginScreen;