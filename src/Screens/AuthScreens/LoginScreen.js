import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
      margin:10
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
      <View>

      </View>
    </View>
  );
};



export default LoginScreen;