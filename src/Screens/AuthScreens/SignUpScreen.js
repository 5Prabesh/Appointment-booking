import { View, Text, StatusBar, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ImageContainer from '../../Components/ImageContainer';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';

const SignUpScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('screen');
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    signUpTextContainer: {
      margin: 15
    },
    loginText: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    },
  })
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageContainer path={require('../../assets/images/signUpImage.png')} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.signUpTextContainer}>
          <Text style={styles.loginText}>
            Sign up
          </Text>
          <InputField label={'Enter email address'} />
          <InputField label={'Enter password'} type={'password'} />
          <InputField label={'Confirm password'} type={'password'} />

        </View>
        <View style={{marginTop: 15,alignItems:'center'}}>
          <Text>
            By signing up, you are agree to our <Text style={{color:'black', fontWeight:'bold'}}>Terms, Conditions{'\n'}</Text> and <Text style={{color:'black', fontWeight:'bold'}}>Policies.</Text>
          </Text>
        </View>
        <View style={{marginTop: 30}}>
        <CustomButton label={'Continue'} onPress={()=>navigation.navigate('Login')}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUpScreen