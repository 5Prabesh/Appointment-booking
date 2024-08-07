import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AppointmentScreen = ({ route, navigation }) => {
    const { profession } = route.params;
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
                    <Text style={styles.headerText}>Appointment</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{profession.name}</Text>
                <Text style={styles.qualification}>{profession.qualification}</Text>
                <Text style={styles.description}>{profession.description}</Text>
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
        textAlign: 'center',
    },
    contentContainer: {
        padding: 20,
    },
    name: {
        fontSize: wp(5),
        fontWeight: 'bold',
        marginBottom: 10,
    },
    qualification: {
        fontSize: wp(4),
        marginBottom: 10,
    },
    description: {
        fontSize: wp(3.5),
    },
});

export default AppointmentScreen;
