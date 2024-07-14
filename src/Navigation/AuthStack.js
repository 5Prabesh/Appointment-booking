import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../Screens/AuthScreens/OnBoardingScreen";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import SignUpScreen from "../Screens/AuthScreens/SignUpScreen";
import ForgotPasswordScreen from "../Screens/AuthScreens/ForgotPasswordScreen";
import OtpScreen from "../Screens/AuthScreens/OtpScreen";

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
            <Stack.Screen name = 'SignUp' component={SignUpScreen} />
            <Stack.Screen name = 'ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name = 'Otp' component={OtpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;