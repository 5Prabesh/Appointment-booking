import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../../Components/CustomButton';

const AppointmentScreen = ({ route, navigation }) => {
    const profession = route?.params?.profession || null;

    if (!profession) {
        // Show a fallback UI if no profession is passed
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white'}}>
                <Text style={{ fontSize: 18, color: 'black' }}>No appointment selected.</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 16, color: 'blue', marginTop: 10 }}>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5
                        name={'chevron-left'}
                        size={30}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>

                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>
                        Appointment
                    </Text>
                </View>
            </View>
            <View style={styles.profileImageContainer}>
                <Image
                    source={{ uri: profession.image }}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.informationContainer}>
                <Text style={styles.name}>{profession.name}</Text>
                <Text style={styles.qualification}>{profession.qualification}</Text>
                <Text style={styles.description}>{profession.description}</Text>
            </View>
            <View style={styles.contactMethodContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.contactButton}>
                    <AntDesign name={'phone'} size={22} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.contactButton}>
                    <AntDesign name={'videocamera'} size={22} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.contactButton}>
                    <AntDesign name={'message1'} size={22} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.bookButtonContainer}>
                <CustomButton label={'Book an Appointment'} backgroundColor={'#31493C'} onPress={()=>navigation.navigate('DateAndTimeScreen')}/>
            </View>
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
        textAlign: 'center'
    },
    profileImage: {
        height: hp(30),
        width: wp(55),
        borderRadius: wp(50),
    },
    profileImageContainer: {
        margin: 20,
        alignItems: 'center',
    },
    informationContainer: {
        margin: 10,
        alignItems: 'center'
    },
    name: {
        fontSize: wp(6),
        fontWeight: '700',
        color: 'black',
    },
    qualification: {
        fontWeight: '600',
        color: 'black',
    },
    description: {
        fontSize: wp(4),
        textAlign: 'justify',
        marginLeft: 40,
        marginRight: 40
    },
    contactMethodContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    contactButton:{
        borderWidth:1,
        padding:10,
        borderRadius: 10,
        backgroundColor:'#31493C',
    },
    bookButtonContainer: {
        position: 'absolute',
        bottom: hp(1),
        right:0,
        left:0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AppointmentScreen;
