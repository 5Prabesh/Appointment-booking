import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';
import Tabs from './src/Navigation/Tabs';
import auth from '@react-native-firebase/auth';


const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? <Tabs/> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default App;