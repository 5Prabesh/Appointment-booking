import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import SearchField from '../../Components/SearchField';


const HomeScreen = () => {
  const styles = StyleSheet.create({
    userProfileImage: {
      height: 45,
      width: 45,
      backgroundColor: 'grey',
      borderRadius: 25
    },
    profileContainer: {
      margin: 20,
      flexDirection: 'row',

    },
    usernameContainer: {
      margin: 12
    },
    usernameText: {
      fontSize: 16,
      color: 'black',
      fontWeight: '600'
    },
    headContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    headText: {
      fontSize: 25,
      fontWeight: '700',
      color: 'black',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10
    }
  })
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/user.png')} style={styles.userProfileImage} />
        </TouchableOpacity>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>User Name</Text>
        </View>
      </View>

      {/* searchbar */}
      <SearchField iconName={'search'} label={'Search'} />

      <ScrollView>
        <View style={styles.headContainer}>
          <Text style={styles.headText}>
            Looking For
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
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
            <TouchableOpacity>
              <Image source={require('../../assets/images/DoctorImage.png')} style={styles.image} />
              <Text>Doctor</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:15}}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/DentistImage.png')} style={styles.image} />
              <Text>Dentist</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:15}}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/HairDresserImage.png')} style={styles.image} />
              <Text>Hair Dresser</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:15, marginRight: 15}}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/Trainer.png')} style={styles.image} />
              <Text>Trainer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;