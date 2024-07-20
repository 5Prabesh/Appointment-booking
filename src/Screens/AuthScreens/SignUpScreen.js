import { View, Text, StatusBar, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import ImageContainer from '../../Components/ImageContainer';
import InputField from '../../Components/InputField';
import CustomButton from '../../Components/CustomButton';
import auth from '@react-native-firebase/auth';


const SignUpScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('screen');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

 const  handlePress = () =>{
  navigation.navigate('Login');
  createUser();
 }

 const createUser = () => {
  auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
 }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    signUpTextContainer: {
      margin: 15
    },
    signUpText: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    },
  })
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ImageContainer path={require('../../assets/images/signUpImage.png')} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>
            Sign up
          </Text>
          <InputField 
          label={'Enter email address'} 
          value={email}
          onChangeText={text => setEmail(text)}/>
          <InputField 
          label={'Enter password'} 
          type={'password'} 
          value={password}
          onChangeText={text => setPassword(text)}/>
          <InputField 
          label={'Confirm password'} 
          type={'password'} 
          value={password}
          onChangeText={text => setPassword(text)}/>

        </View>
        <View style={{marginTop: 15,alignItems:'center'}}>
          <Text style={{color:'grey'}}>
            By signing up, you are agree to our <Text style={{color:'black', fontWeight:'bold'}}>Terms, Conditions{'\n'}</Text> and <Text style={{color:'black', fontWeight:'bold'}}>Policies.</Text>
          </Text>
        </View>
        <View style={{marginTop: 20}}>
        <CustomButton label={'Continue'} onPress={handlePress}/>
        </View>
        <View style={{marginTop: 15,flexDirection:'row', justifyContent:'center'}}>
          <Text style={{color:'black', fontWeight:'bold'}}>Already have an account?</Text>
          <TouchableOpacity 
          activeOpacity={0.4}
          >
            <Text style={{color:'grey'}}>
              {'\t'}Log in 
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUpScreen