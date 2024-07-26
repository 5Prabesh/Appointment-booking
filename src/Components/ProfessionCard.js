import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfessionCard = ({professionals}) => {
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
                    <TouchableOpacity style={styles.availableButton}>
                        <Text style={styles.availableText}>Available</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookButton}>
                        <Text style={styles.bookText}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

    return (
        <FlatList
            data={professionals}
            renderItem={renderProfession}
            keyExtractor={item => item.id.toString()}
            vertical={true} // Enable horizontal scrolling
            showsVerticalScrollIndicator={false} // Hide horizontal scroll indicator (optional)
        />
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '90%',
        margin: 20
    },
    profileImage: {
        width: wp(11),
        height: hp(6),
        borderRadius: 30,
        backgroundColor: '#d8d8d8',
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: wp(4.5),
        fontWeight: 'bold',
        color: '#333',
    },
    qualification: {
        fontSize: wp(3.5),
        color: '#666',
    },
    description: {
        fontSize: wp(3.5),
        color: '#666',
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:5
    },
    availableButton: {
        backgroundColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 10,
    },
    availableText: {
        color: '#fff',
        fontSize: wp(3.5),
    },
    bookButton: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    bookText: {
        color: '#000',
        fontSize: wp(3.5),
    },
})

export default ProfessionCard;