import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchField from '../../Components/SearchField';
import DoctorCard from '../../Components/Card';


const HomeScreen = ({navigation}) => {
  
  const styles = StyleSheet.create({
    userProfileImage: {
      height: hp(5),
      width: wp(10),
      backgroundColor: 'grey',
      borderRadius: 90
    },
    profileContainer: {
      margin: 20,
      flexDirection: 'row',

    },
    usernameContainer: {
      margin: 12
    },
    usernameText: {
      fontSize: hp(2),
      color: '#001A23',
      fontWeight: '600'
    },
    headContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    headText: {
      fontSize: wp(5.5),
      fontWeight: '700',
      color: '#001A23',
    },
    image: {
      width: wp(35),
      height: hp(16),
      borderRadius: 10
    },
    popularTextContainer:{
      margin: 20
    },
    popularText:{
      fontSize: wp(6),
      fontWeight: '600',
      color: '#001A23',
    },
    professionText:{
      color:'#001A23',
      fontSize: wp(3.5),
      marginTop:4,
    }
  })
  return (
    <ScrollView style={{ flex: 1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <View style={styles.profileContainer}>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={require('../../assets/icons/user.png')} style={styles.userProfileImage} />
        </TouchableOpacity>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>User Name</Text>
        </View>
      </View>
      
      {/* searchbar */}
      <SearchField iconName={'search'} label={'Search'} />
        <View style={styles.headContainer}>
          <Text style={styles.headText}>
            Looking For
          </Text>
          <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('CategoriesScreen')}>
            <Text style={{ fontWeight: 'bold', fontSize: wp(4), color:'grey' }}>
              More
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
        flexDirection:'row', 
        marginLeft:20,
        }}>
          <View>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('CategoriesStack', { screen: 'DoctorScreen' })}>
              <Image source={require('../../assets/images/DoctorImage.png')} style={styles.image} />
              <Text style={styles.professionText}>Doctor</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:15}}>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('CategoriesStack', { screen: 'DentistScreen' })}>
              <Image source={require('../../assets/images/DentistImage.png')} style={styles.image} />
              <Text style={styles.professionText}>Dentist</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:15}}>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('CategoriesStack', { screen: 'HairDresserScreen' })}>
              <Image source={require('../../assets/images/HairDresserImage.png')} style={styles.image} />
              <Text style={styles.professionText}>Hair Dresser</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:15, marginRight: 15}} >
            <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('CategoriesStack', { screen: 'TrainerScreen' })}>
              <Image source={require('../../assets/images/Trainer.png')} style={styles.image} />
              <Text style={styles.professionText}>Trainer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.popularTextContainer}>
          <Text style={styles.popularText}>
            Popular
          </Text>
        </View>

        {/* card */}
        <DoctorCard />
      </ScrollView>
  );
};

export default HomeScreen;