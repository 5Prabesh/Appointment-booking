import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../Screens/AuthScreens/OnBoardingScreen";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name = 'OnBoarding' component={OnBoardingScreen} />
            <Stack.Screen name = 'Login' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;