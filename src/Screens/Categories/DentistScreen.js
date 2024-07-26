import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import SearchField from '../../Components/SearchField';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import professionalsData from '../../assets/data/professionalsdata';
import ProfessionCard from '../../Components/ProfessionCard';

const DentistScreen = ({navigation}) => {
    const dentist = professionalsData.filter(item => item.profession === 'Dentist' && item.isAvailable === 'true');

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
                        Dentist
                    </Text>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <SearchField label={'Search'} iconName={'search'}/>
            </View>
            <ProfessionCard
                professionals={dentist}
            />
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 12,
    },
    backIcon: {
        color: 'black'
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: wp(6),
        fontWeight: '700',
        textAlign: 'center'
    },
    searchContainer:{
        marginTop: 20
    }
})

export default DentistScreen;