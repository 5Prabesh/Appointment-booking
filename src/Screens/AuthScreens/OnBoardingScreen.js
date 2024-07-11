import { View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageSlider from '../../Components/slider';

const OnBoardingScreen = ({ navigation }) => {
  const images = [

    require('../../assets/images/onBoarding1.png'),

    require('../../assets/images/onBoarding2.png'),

    require('../../assets/images/onBoarding3.png')

  ];
  const {width} = Dimensions.get('window')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: StatusBar.currentHeight
    },
    buttonView :{
      marginTop: 70,
      alignItems:'center'
    },
    button : {
      backgroundColor: 'black',
      width: width * 0.8,
      height: 50,
      borderRadius: 20,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonText : {
      textAlign:'center',
      fontSize: 16,
      fontWeight:'bold',
      color:'white',

    }
  })


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageSlider images={images} navigation={navigation} />
      <View style={styles.buttonView}>
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.9}
        onPress={()=>navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>
            Let's Go
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default OnBoardingScreen