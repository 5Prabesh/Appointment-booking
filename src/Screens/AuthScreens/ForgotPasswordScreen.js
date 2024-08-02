import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import ImageContainer from '../../Components/ImageContainer';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ForgotPasswordScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    forgotTextContainer: {
      marginVertical: hp(2),
      marginHorizontal: wp(5),
    },
    forgotText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: wp(6.5)
    },
    emailContainer: {
      marginTop: hp(0.01),
      marginHorizontal: wp(5),
    },
    buttonContainer: {
      marginHorizontal: wp(5),
      marginBottom: hp(2),
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageContainer path={require('../../assets/images/ForgotPasswordImage.png')} imageheight={wp(90)} onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.forgotTextContainer}>
            <Text style={styles.forgotText}>Forgot</Text>
            <Text style={styles.forgotText}>your Password?</Text>
          </View>
          <View style={styles.forgotTextContainer}>
            <Text style={{ color: 'grey' }}>
              Please enter the email address you'd like your password reset information sent to
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <InputField label={'Enter email address'} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton label={'Continue'} onPress={() => { navigation.navigate('Otp') }} />
        </View>
      </ScrollView>
    </View>
  )
}

export default ForgotPasswordScreen;
