import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ImageContainer = ({path,onPress,imageheight}) => {
    const{height,width} = Dimensions.get('screen')
    const styles = StyleSheet.create({
        imageStyle: {
            height: imageheight || hp(45),
            width: width,
          },
          backIcon: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          },
          backText: {
            color: 'black',
            fontSize: 15,
            marginLeft: 4,
            fontWeight: 'bold',
          },
          backButtonContainer: {
            flexDirection: 'row',
            margin: 10
          }
    })
    return (
            <ImageBackground source={path} style={styles.imageStyle}>
                <TouchableOpacity
                    style={styles.backButtonContainer}
                    activeOpacity={0.4}
                    onPress={onPress}
                >
                    <FontAwesome5 name={'chevron-left'} style={styles.backIcon} />
                    <Text style={styles.backText}>
                        Back
                    </Text>
                </TouchableOpacity>

            </ImageBackground>
    )
}

export default ImageContainer