import { View, Text, StatusBar, Dimensions, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import ImageContainer from '../../Components/ImageContainer';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ChangePasswordScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    resetPasswordContainer: {
      marginVertical: hp(2),
      marginHorizontal: wp(5),
    },
    resetPasswordText: {
      color: 'black',
      fontSize: wp(6),
      fontWeight: 'bold',
    },
    changePasswordContainer: {
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
      <ImageContainer path={require('../../assets/images/ChangePasswordImage.png')} imageheight={hp(46)} onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.resetPasswordContainer}>
            <Text style={styles.resetPasswordText}>
              Reset
            </Text>
            <Text style={styles.resetPasswordText}>
              Password?
            </Text>
          </View>
          <View style={styles.changePasswordContainer}>
            <InputField label={'Enter new password'} type={'password'} />
            <InputField label={'Confirm new password'} type={'password'} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton label={'Confirm'} onPress={() => navigation.navigate('Login')} backgroundColor={'#31493C'} textColor={'#FFD700'}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePasswordScreen;
