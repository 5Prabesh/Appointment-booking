import { View, Text, Dimensions, StatusBar, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ImageContainer from '../../Components/ImageContainer'
import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomButton'

const ForgotPasswordScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('screen')
  const styles = StyleSheet.create({
    forgotTextContainer: {
      margin: 10
    },
    forgotText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 30
    },
    emailContainer:{
      marginTop: 15,
      marginLeft: 10,
    }
  })
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageContainer path={require('../../assets/images/ForgotPasswordImage.png')} imageheight={height * 0.45} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.forgotTextContainer}>
          <Text style={styles.forgotText}>
            Forgot
          </Text>
          <Text style={styles.forgotText}>
            your Password?
          </Text>
        </View>
        <View style={styles.forgotTextContainer}>
          <Text>
            Please enter the email address you’d like your password reset information sent to
          </Text>
        </View>
        <View style={styles.emailContainer}>
          <InputField label={'Enter email address'} />
        </View>
        <View style={{marginTop: 25}}>
        <CustomButton label={'Continue'} onPress={()=>{navigation.navigate('Otp')}}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default ForgotPasswordScreen