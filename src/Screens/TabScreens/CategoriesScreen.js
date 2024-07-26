import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchField from '../../Components/SearchField';
import CategoriesCard from '../../Components/CategoriesCard';


const CategoriesScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <FontAwesome5
          name={'chevron-left'}
          size={30}
          style={styles.backIcon}
        />
        </TouchableOpacity>
        
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
          onPress={()=>navigation.navigate('DoctorScreen')}
        />
        <CategoriesCard
          image={require('../../assets/images/DentistImage.png')}
          label={'Dentist'}
          onPress={()=>navigation.navigate('DentistScreen')}
        />
        <CategoriesCard
          image={require('../../assets/images/HairDresserImage.png')}
          label={'Hair Dresser'}
          onPress={()=>navigation.navigate('HairDresserScreen')}
        />
        <CategoriesCard
          image={require('../../assets/images/Trainer.png')}
          label={'Trainer'}
          onPress={()=>navigation.navigate('TrainerScreen')}
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
  },
  backIcon: {
    color: 'black',
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: wp(6),
    fontWeight: '700',
    textAlign:'center'
  },
  searchContainer: {
    marginTop: 20,
  },
});

export default CategoriesScreen;