import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchField from '../../Components/SearchField';
import ProfessionCard from '../../Components/ProfessionCard';
import professionalsData from '../../assets/data/professionalsdata';

const DoctorScreen = ({navigation}) => {
    const doctors = professionalsData.filter(item => item.profession === 'Doctor' && item.isAvailable === 'true');
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
                        Doctors
                    </Text>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <SearchField label={'Search'} iconName={'search'} />
            </View>

            <View style={{
                marginTop: 10,
                marginLeft: 20
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: '700',
                    fontSize: 16
                }}>
                    List of Doctors
                </Text>
            </View>
            <ProfessionCard
                professionals={doctors}
                navigation={navigation}
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
    searchContainer: {
        marginTop: 20
    },

});

export default DoctorScreen;