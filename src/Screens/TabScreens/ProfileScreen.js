import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  const styles = StyleSheet.create({
    profileContainer:{
      alignItems:'center'
    }
  })


  return (
    <View style={{flex:1}}>
      <View style={styles.profileContainer}>
        <Text>Profile</Text>
      </View>
    </View>
  )
}

export default ProfileScreen