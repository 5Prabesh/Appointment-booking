import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CategoriesCard = ({label,image,onPress}) => {
  return (
    <View style={styles.imageContainer}>
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
          <Image source={image} style={styles.image}/>
          <Text style={styles.professionText}>{label}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    image:{
        width: wp(90),
        height: hp(25),
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      },
      imageContainer:{
        marginTop:20,
        marginLeft: wp(4.5),
        marginRight: wp(4.5),
      },
      professionText:{
        color:'black',
        fontSize: wp(4.5),
        fontWeight:'450',
        backgroundColor:'#ECECEC',
        marginRight: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding:10
      },
})

export default CategoriesCard;