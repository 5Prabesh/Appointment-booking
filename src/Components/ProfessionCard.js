import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfessionCard = ({ professionals, navigation }) => {
    const renderProfession = ({ item }) => (
        <View style={styles.cardContainer}>
            <Image
                source={{ uri: item.image }}
                style={styles.profileImage}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.qualification}>{item.qualification}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.availableButton} activeOpacity={0.9}>
                        <Text style={styles.availableText}>Available</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.bookButton} 
                        onPress={() => navigation.navigate('AppointmentScreen', { profession: item })}
                    >
                        <Text style={styles.bookText}>Book now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={professionals}
            renderItem={renderProfession}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#EBEAEA',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '90%',
        marginLeft: 20,
        marginTop: 15,
        elevation: 8,
    },
    profileImage: {
        width: wp(11),
        height: hp(6),
        borderRadius: 30,
        backgroundColor: '#white',
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: wp(4.5),
        fontWeight: 'bold',
        color: '#2C302E',
    },
    qualification: {
        fontSize: wp(3.5),
        color: '#2C302E',
    },
    description: {
        fontSize: wp(3.5),
        color: '#2C302E',
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    availableButton: {
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 10,
        borderColor: 'green',
        borderWidth: 1,
    },
    availableText: {
        color: '#2C302E',
        fontSize: wp(3.5),
    },
    bookButton: {
        backgroundColor: '#31493C',
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    bookText: {
        color: 'white',
        fontSize: wp(3.5),
    },
});

export default ProfessionCard;
