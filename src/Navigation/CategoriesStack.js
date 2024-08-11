import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../Screens/TabScreens/CategoriesScreen";
import DoctorScreen from "../Screens/Categories/DoctorScreen";
import DentistScreen from "../Screens/Categories/DentistScreen";
import HairDresser from "../Screens/Categories/HairDresser";
import TrainerScreen from "../Screens/Categories/TrainerScreen";

const CategoriesStack = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
    initialRouteName="CategoriesScreen"
    screenOptions={{
      headerShown : false
    }}
    >
        <Stack.Screen name = 'CategoriesScreen' component={CategoriesScreen} />
        <Stack.Screen name = 'DoctorScreen' component={DoctorScreen} />
        <Stack.Screen name = 'DentistScreen' component={DentistScreen} />
        <Stack.Screen name = 'HairDresserScreen' component={HairDresser} />
        <Stack.Screen name = 'TrainerScreen' component={TrainerScreen} />
    </Stack.Navigator>
  )
}

export default CategoriesStack;