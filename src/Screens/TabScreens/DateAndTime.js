import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Calendar } from 'react-native-calendars';
import CustomButton from '../../Components/CustomButton';

const DateAndTime = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const handleTimeSlotPress = (slot) => {
        setSelectedTimeSlot(slot);
    };

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
                        Select Date and Time
                    </Text>
                </View>
            </View>
            <View style={styles.calenderContainer}>
                <Calendar
                    current={selectedDate}
                    onDayPress={handleDayPress}
                    markedDates={{
                        [selectedDate]: {
                            selected: true,
                            selectedColor: '#31493C',
                        },
                    }}
                    theme={{
                        selectedDayBackgroundColor: '#31493C',
                        selectedDayTextColor: '#FFD700',
                        arrowColor: '#31493C',
                        monthTextColor: 'black',
                    }}
                />
            </View>
            <View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>Available Time Slots</Text>
                </View>
                <View style={styles.bookTimeContainer}>
                    {['10:00 PM', '12:00 PM', '05:00 AM', '08:00 AM', '03:00 PM'].map((slot) => (
                        <TouchableOpacity
                            key={slot}
                            style={[
                                styles.bookTimeButton,
                                selectedTimeSlot === slot && styles.activeTimeSlot
                            ]}
                            onPress={() => handleTimeSlotPress(slot)}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    selectedTimeSlot === slot && styles.activeButtonText
                                ]}
                            >
                                {slot}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.bookContainer}>
                <CustomButton label={'Book now'} backgroundColor={'#31493C'}/>
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
    calenderContainer: {
        padding: 10
    },
    timeContainer: {
        alignItems: 'center'
    },
    timeText: {
        color: 'black',
        fontWeight: '500',
        fontSize: wp(4.5)
    },
    bookTimeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    bookTimeButton: {
        backgroundColor: '#31493C',
        borderRadius: 5,
        padding: 10,
        width: wp(25), // Adjust the width to fit 3 items in a row
        alignItems: 'center',
        marginBottom: 10,
    },
    activeTimeSlot: {
        backgroundColor: '#FFD700', // Active background color
    },
    buttonText: {
        color: '#FFD700',
    },
    activeButtonText: {
        color: '#31493C', // Active text color
    },
    bookContainer:{
        position:'relative',
        bottom: 1,
        marginTop: 20
    },
});

export default DateAndTime;
