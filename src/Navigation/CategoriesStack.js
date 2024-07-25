import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../Screens/TabScreens/CategoriesScreen";
import DoctorScreen from "../Screens/Categories/DoctorScreen";

const CategoriesStack = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
    screenOptions={{
      headerShown : false
    }}
    >
        <Stack.Screen name = 'CategoriesScreen' component={CategoriesScreen} />
        <Stack.Screen name = 'DoctorScreen' component={DoctorScreen} />
    </Stack.Navigator>
  )
}

export default CategoriesStack