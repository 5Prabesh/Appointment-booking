import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import professionalsData from '../assets/data/professionalsdata';

const DoctorCard = () => {

  const [doctors, setDoctors] = useState(professionalsData);

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
        <Text style={styles.descriptionText} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
      <View style={styles.cardFooterContainer}>
        <View style={styles.reviewsContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}> ({item.reviews})</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
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
    backgroundColor: '#8c8c8c',
    marginLeft: 15,
    borderRadius: 10,
    width: 240, // Adjust width for horizontal scrolling
    padding: 10, // Add padding to ensure content doesn't touch the edges
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 20
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
    color: 'white',
    fontSize: 14,
    fontWeight: '500'
  },
  professionText: {
    color: '#dedede'
  },
  descriptionContainer: {
    marginLeft: 12,
    maxWidth: 190 // Set maximum width to constrain the text
  },
  descriptionText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'justify'
  },
  reviewsContainer: {
    marginTop:10,
    marginBottom: 5,
    marginLeft: 12,
    flexDirection: 'row'
  },
  rating: {
    color: '#FFD700',
    fontSize: 13
  },
  reviews: {
    color: 'white',
    fontSize: 13
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
    backgroundColor: 'white',
    width: 70,
    height: 30,
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500'
  }
});

export default DoctorCard;
