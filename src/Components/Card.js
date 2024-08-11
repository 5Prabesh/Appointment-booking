import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import professionalsData from '../assets/data/professionalsdata';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const DoctorCard = ({navigation}) => {

  const [doctors, setDoctors] = useState(professionalsData.filter(profession => profession.isPopular === 'true'));

  const renderDoctor = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.containerData}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.nameTextContainer}>
          <Text style={styles.nameText}>
            {item.name}
          </Text>
          <Text style={styles.professionText}>
            {item.profession}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <View style={styles.cardFooterContainer}>
        <View style={styles.reviewsContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}> ({item.reviews})</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.button}  onPress={() => navigation.navigate('AppointmentStack', { screen: 'AppointmentScreen', params: { profession: item } })}>
            <Text style={styles.buttonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )


  return (
    <FlatList
      data={doctors}
      renderItem={renderDoctor}
      keyExtractor={item => item.id.toString()}
      horizontal={true} // Enable horizontal scrolling
      showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator (optional)
    />
  )
}

const styles = StyleSheet.create({
  
  cardContainer: {
    backgroundColor: '#31493C',
    marginLeft: 15,
    borderRadius: 10,
    width: wp(75), // Adjust width for horizontal scrolling
    padding: 10, // Add padding to ensure content doesn't touch the edges
  },
  image: {
    width: wp(11),
    height: hp(6),
    borderRadius: 25
  },
  containerData: {
    flexDirection: 'row',
    marginBottom: 8
  },
  nameTextContainer: {
    marginLeft: 10,
    flexShrink: 1 // Allow text to shrink to fit the space
  },
  nameText: {
    color: '#E8F1F2',
    fontSize: wp(4),
    fontWeight: '500'
  },
  professionText: {
    color: '#E8F1F2',
    fontSize: wp(3.5)
  },
  descriptionContainer: {
    marginLeft:12,
    // maxWidth: 240 // Set maximum width to constrain the text
  },
  descriptionText: {
    color: '#E8F1F2',
    fontSize: wp(3.5),
    textAlign:'justify'
  },
  reviewsContainer: {
    marginTop:10,
    marginBottom: 5,
    marginLeft: 12,
    flexDirection: 'row'
  },
  rating: {
    color: 'yellow',
    fontSize: wp(4)
  },
  reviews: {
    color: '#E8F1F2',
    fontSize: wp(4)
  },
  cardFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    paddingBottom: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#E8F1F2',
    width: wp(20),
    height: wp(10),
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: '#001A23',
    textAlign: 'center',
    fontWeight: '500'
  }
});

export default DoctorCard;
