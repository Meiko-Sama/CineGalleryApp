// IMPORTANDO O STACK
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Home from './src/assets/pages/Home';
import SignIn from './src/assets/pages/SignIn';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
