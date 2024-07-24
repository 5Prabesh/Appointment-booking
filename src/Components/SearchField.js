import { View, TextInput, } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SearchField = ({iconName, label}) => {
  return (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#d9d9d9',
          borderRadius: 10,
          paddingLeft: 10,
        }}>
          <FontAwesome5
            name={iconName}
            size={20}
            style={{
              position: 'absolute',
              left: 10,
              color: 'grey'
            }}
          />
          <TextInput
            placeholder={label}
            placeholderTextColor="grey"
            keyboardType="default"
            style={{
              flex: 1,
              paddingLeft: 40, // Adjust the padding to make room for the icon
              height: hp(6),
              color:'black'
            }}
          />
        </View>
      </View>
  )
}

export default SearchField;