import { View, Text, StyleSheet,Image } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchField from '../../Components/SearchField';



const DoctorScreen = () => {
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
                        Doctors
                    </Text>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <SearchField label={'Search'} iconName={'search'}/>
            </View>
            <View>
                <View>
                    <Image source={require('../../assets/images/DoctorImage.png')} style={styles.image}/>
                </View>
            </View>
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
    },
    image:{
        width: 60, 
        height:60
    }
})

export default DoctorScreen;