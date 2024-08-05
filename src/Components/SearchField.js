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
          backgroundColor: '#f5f5f5',
          borderRadius: 7,
          paddingLeft: 10,
        }}>
          <FontAwesome5
            name={iconName}
            size={20}
            style={{
              position: 'absolute',
              left: 10,
              color: '#7a7a7a'
            }}
          />
          <TextInput
            placeholder={label}
            placeholderTextColor="#7a7a7a"
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