import { View, Text, StatusBar, Dimensions, ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import ImageContainer from '../../Components/ImageContainer'
import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomButton'

const ChangePasswordScreen = ({navigation}) => {
    const {width,height} = Dimensions.get('screen')
    const styles = StyleSheet.create({
        resetPasswordContainer: {
            margin: 10
        },
        resetPasswordText:{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold', 
        },
        changePasswordContainer:{
            marginLeft: 10
        },
        button:{
            marginTop: 35
        }
    })
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <ImageContainer path={require('../../assets/images/ChangePasswordImage.png')} imageheight={height*0.46} onPress={()=>navigation.goBack()}/>
      <ScrollView>
        <View style={styles.resetPasswordContainer}>
            <Text style={styles.resetPasswordText}>
                Reset 
            </Text>
            <Text style={styles.resetPasswordText}>
                Password?
            </Text>
        </View>
        <View style={styles.changePasswordContainer}>
            <InputField label={'Enter new password'} type={'password'}/>
            <InputField label={'Confirm new password'} type={'password'}/>
        </View>
        <View style={styles.button}>
            <CustomButton label={'Confirm'} onPress={()=>navigation.navigate('Login')}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default ChangePasswordScreen