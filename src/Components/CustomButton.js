import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomButton = ({ label, showGoogleIcon, onPress, backgroundColor, textColor }) => {
  const { width } = Dimensions.get('window');
  const { height } = Dimensions.get('window');


  const styles = StyleSheet.create({
    loginButtonContainer: {
      alignItems: 'center',
    },
    loginButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: backgroundColor || 'black',
      width: width * 0.9,
      height: height * 0.08,
      borderRadius: 20,
      justifyContent: 'center',
    },
    loginButtonText: {
      color: textColor || 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: showGoogleIcon ? 10 : 0, // Add space only if the icon is shown
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
        {showGoogleIcon && <FontAwesome5 name="google" size={15} style={styles.googleIcon} />}
        <Text style={styles.loginButtonText}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;
