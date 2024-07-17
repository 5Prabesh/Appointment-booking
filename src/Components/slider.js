import React, { useState } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View>
      {/* Image Slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 30 }}
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
                width: screenWidth * 0.8, // 80% of screen width
                height: screenHeight * 0.6,
                borderRadius: 20,
                marginHorizontal: screenWidth * 2, // Center the image with horizontal margin
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
              backgroundColor: index === activeIndex ? 'black' : 'grey',
              height: 10,
              width: 10,
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
