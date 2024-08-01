import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CustomButton = ({ label, showGoogleIcon, onPress, backgroundColor, textColor }) => {

  const styles = StyleSheet.create({
    loginButtonContainer: {
      alignItems: 'center',
    },
    loginButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: backgroundColor || '#001A23',
      width: wp(90),
      height: hp(8),
      borderRadius: 8,
      justifyContent: 'center',
    },
    loginButtonText: {
      color: textColor || '#E8F1F2',
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: showGoogleIcon ? 10 : 0, // Add space only if the icon is shown
      fontSize: wp(4)
    },
    googleIcon: {
      color: 'black',
    },
  });

  return (
    <View style={styles.loginButtonContainer}>
      <TouchableOpacity 
      style={styles.loginButton} 
      activeOpacity={0.8}
      onPress={onPress}
      
      >
        {showGoogleIcon && <FontAwesome5 name="google" size={20} style={styles.googleIcon} />}
        <Text style={styles.loginButtonText}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;
