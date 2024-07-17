import { View, Text, Dimensions, StatusBar, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, {useRef} from 'react'
import ImageContainer from '../../Components/ImageContainer'
import CustomButton from '../../Components/CustomButton'

const OtpScreen = ({ navigation }) => {
    const { height, width } = Dimensions.get('screen')
    const styles = StyleSheet.create({
        otpContainer: {
            margin: 10,
        },
        otpText: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: 30
        },
        otpInput : {
            backgroundColor: 'white',
            height: 50,
            width: 50,
            borderRadius: 15,
            textAlign:'center',
            borderWidth:1
        },
        otpInputContainerWrap:{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent:'center'
        },
        otpInputContainer:{
            paddingLeft: 15
        }
    })

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    const handleInputChange = (text, ref) => {
        if(text.length === 1) {
            ref.current.focus();
        }
    }
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <ImageContainer path={require('../../assets/images/OtpImage.png')} imageheight={height * 0.4} onPress={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.otpContainer}>
                    <Text style={styles.otpText}>
                        Enter OTP
                    </Text>
                </View>
                <View style={styles.otpContainer}>
                    <Text style={{color:'grey'}}>
                    Enter 4 digit verification code sent to your registered mobile number.
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
                        
                        ref={input4Ref}/>
                    </View>
                </View>
                <View style={{marginTop: 80}}>
                    <CustomButton label={'Submit'} onPress={()=>navigation.navigate('ChangePassword')}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default OtpScreen