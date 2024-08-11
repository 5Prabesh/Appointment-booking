import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppointmentScreen from "../Screens/TabScreens/AppointmentScreen";
import DateAndTime from "../Screens/TabScreens/DateAndTime";

const AppointmentStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='AppointmentScreen' component={AppointmentScreen} />
            <Stack.Screen name='DateAndTimeScreen' component={DateAndTime} />
        </Stack.Navigator>
    )
}

export default AppointmentStack;