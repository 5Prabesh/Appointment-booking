import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollViewComponent, ScrollView } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchField from '../../Components/SearchField';
import CategoriesCard from '../../Components/CategoriesCard';


const CategoriesScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.headerContainer}>
        <FontAwesome5
          name={'chevron-left'}
          size={30}
          style={styles.backIcon}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Categories
          </Text>
        </View>
      </View>

      {/* searchbar */}
      <View style={styles.searchContainer}>
        <SearchField label={'Search'} iconName={'search'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* categories card */}
        <CategoriesCard
          image={require('../../assets/images/DoctorImage.png')}
          label={'Doctor'}
        />
        <CategoriesCard
          image={require('../../assets/images/DentistImage.png')}
          label={'Dentist'}
        />
        <CategoriesCard
          image={require('../../assets/images/HairDresserImage.png')}
          label={'Hair Dresser'}
        />
        <CategoriesCard
          image={require('../../assets/images/Trainer.png')}
          label={'Trainer'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 12,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    color: 'black',
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: wp(6),
    fontWeight: '700'
  },
  searchContainer: {
    marginTop: 20,
  },
});

export default CategoriesScreen;