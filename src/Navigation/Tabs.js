import { View, Image,Text} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/TabScreens/HomeScreen";
import MessageScreen from "../Screens/TabScreens/MessageScreen";
import ProfileScreen from "../Screens/TabScreens/ProfileScreen";
import CategoriesStack from "./CategoriesStack";
import AppointmentScreen from "../Screens/TabScreens/AppointmentScreen";
import AppointmentStack from "./AppointmentStack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:'white',
                height: 60,
                borderColor:'white',
                position:'static'
            }
        }}
        initialRouteName="HomeScreen"
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image 
                         source={require('../assets/icons/home.png')}
                         resizeMode="contain"
                         style={{
                            width: 22,
                            height:22,
                            tintColor: focused ? 'black' : 'grey',
                         }}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name='CategoriesStack' component={CategoriesStack} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image 
                         source={require('../assets/icons/category.png')}
                         resizeMode="contain"
                         style={{
                            width: 22,
                            height:22,
                            tintColor: focused ? 'black' : 'grey',
                         }}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name='AppointmentStack' component={AppointmentStack} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image
                        source={require('../assets/icons/clock.png')}
                        resizeMode="contain"
                        style={{
                            width: 22,
                            height:22,
                            tintColor: focused ? 'black' : 'grey',
                        }}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name='MessageScreen' component={MessageScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image 
                        source={require('../assets/icons/comment.png')}
                        resizeMode="contain"
                        style={{
                            width: 22,
                            height:22,
                            tintColor: focused ? 'black' : 'grey'
                        }}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name='ProfileScreen' component={ProfileScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image 
                        source={require('../assets/icons/user.png')}
                        resizeMode="contain"
                        style={{
                            height: 22,
                            width: 22,
                            tintColor : focused ? 'black' : 'grey'
                        }}
                        />
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    )

}

export default Tabs;