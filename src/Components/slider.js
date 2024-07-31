import React, { useState } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View>
      {/* Image Slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Increase scroll event frequency for more accurate updates
        bounces={false}
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={{
              width: screenWidth,
              alignItems: 'center',
            }}
          >
            <Image
              source={image}
              style={{
                width: wp(90), // 80% of screen width
                height: hp(60),
                borderRadius: 15,
                marginHorizontal: wp(9), // Center the image with horizontal margin
                backgroundColor:'#B3EFB2'
              }}
            />
          </View>
        ))}
      </ScrollView>

      {/* Circle Indicator */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              backgroundColor: index === activeIndex ? '#7A9E7E' : '#B3EFB2',
              height: hp(1.5),
              width: wp(3),
              marginHorizontal: 5,
              borderRadius: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;
