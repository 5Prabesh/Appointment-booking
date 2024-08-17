import { View, Text, Dimensions, StatusBar, ScrollView, StyleSheet, TextInput } from 'react-native';
import React, { useRef } from 'react';
import ImageContainer from '../../Components/ImageContainer';
import CustomButton from '../../Components/CustomButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const OtpScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    otpContainer: {
      marginVertical: hp(2),
      marginHorizontal: wp(5),
    },
    otpDescriptionContainer: {
      marginVertical: hp(0.1),
      marginHorizontal: wp(5),
    },
    otpText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: wp(6.5),
    },
    otpInput: {
      backgroundColor: 'white',
      height: hp(7),
      width: wp(12),
      borderRadius: 15,
      textAlign: 'center',
      borderWidth: 1,
    },
    otpInputContainerWrap: {
      marginTop: hp(2),
      flexDirection: 'row',
      justifyContent: 'center',
    },
    otpInputContainer: {
      paddingLeft: wp(2),
    },
    buttonContainer: {
      marginHorizontal: wp(5),
      marginBottom: hp(2),
    },
  });

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleInputChange = (text, ref) => {
    if (text.length === 1) {
      ref.current.focus();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageContainer path={require('../../assets/images/OtpImage.png')} imageheight={hp(50)} onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.otpContainer}>
            <Text style={styles.otpText}>Enter OTP</Text>
          </View>
          <View style={styles.otpDescriptionContainer}>
            <Text style={{ color: 'grey' }}>
              Enter the 4-digit verification code sent to your registered mobile number.
            </Text>
          </View>
          <View style={styles.otpInputContainerWrap}>
            <View style={styles.otpInputContainer}>
              <TextInput
                style={styles.otpInput}
                keyboardType='number-pad'
                maxLength={1}
                ref={input1Ref}
                onChangeText={text => handleInputChange(text, input2Ref)}
              />
            </View>
            <View style={styles.otpInputContainer}>
              <TextInput
                style={styles.otpInput}
                keyboardType='number-pad'
                maxLength={1}
                ref={input2Ref}
                onChangeText={text => handleInputChange(text, input3Ref)}
              />
            </View>
            <View style={styles.otpInputContainer}>
              <TextInput
                style={styles.otpInput}
                keyboardType='number-pad'
                maxLength={1}
                ref={input3Ref}
                onChangeText={text => handleInputChange(text, input4Ref)}
              />
            </View>
            <View style={styles.otpInputContainer}>
              <TextInput
                style={styles.otpInput}
                keyboardType='number-pad'
                maxLength={1}
                ref={input4Ref}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton label={'Submit'} onPress={() => navigation.navigate('ChangePassword')} backgroundColor={'#31493C'} textColor={'#FFD700'}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default OtpScreen;
