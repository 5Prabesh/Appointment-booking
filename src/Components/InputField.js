import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const InputField = ({ label, type }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const styles = StyleSheet.create({
        textPlaceHolder: {
            color: 'black'
        },
        inputContainer: {
            // marginLeft: 10
        },
        icon:{
            marginRight: 30,
            marginTop: 15,
        }
    })
    return (

        <View style={styles.inputContainer}>
            {type === 'password' ?
                (
                    <>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}>
                            <TextInput
                                style={styles.textPlaceHolder}
                                placeholder={label}
                                placeholderTextColor={'grey'}
                                secureTextEntry={!isPasswordVisible}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} activeOpacity={0.7}>
                                <FontAwesome5
                                    name={isPasswordVisible ? 'eye-slash' : 'eye'}
                                    size={20}
                                    color="grey"
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                backgroundColor: 'grey',
                                height: 1,
                                width: '95%',
                                marginLeft: 5
                            }}
                        />
                    </>
                ) : (
                    <>
                        <TextInput
                            style={styles.textPlaceHolder}
                            placeholder={label}
                            placeholderTextColor={'grey'}
                        />
                        <View
                            style={{
                                backgroundColor: 'grey',
                                height: 1,
                                width: '95%',
                                marginLeft: 5
                            }}
                        />
                    </>
                )}
        </View>

    )
}

export default InputField;