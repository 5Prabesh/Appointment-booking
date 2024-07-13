import { View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageSlider from '../../Components/slider';
import CustomButton from '../../Components/CustomButton';

const OnBoardingScreen = ({ navigation }) => {
  const images = [

    require('../../assets/images/onBoarding1.png'),

    require('../../assets/images/onBoarding2.png'),

    require('../../assets/images/onBoarding3.png')

  ];
  const { width } = Dimensions.get('window')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: StatusBar.currentHeight
    },
  })
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageSlider images={images} navigation={navigation} />
      <View style={{ marginTop: 50 }}>
        <CustomButton 
        label={"Let's Go"} 
        onPress={()=>navigation.navigate('Login')}
        />
      </View>

    </View>
  )
}



export default OnBoardingScreen