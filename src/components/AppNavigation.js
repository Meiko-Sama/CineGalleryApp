// IMPORTANDO O STACK E O NAVIGATION
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// IMPORTANDO O USE EFFECT e STATE
import { useState, useEffect } from 'react';

// DECLARAÇÃO DO STACK
const Stack = createNativeStackNavigator();

//IMPORTANDO ASYNC STORAGE
import { getItem } from "./AsyncStorage";
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Gallery from "../pages/Gallery";

export default function AppNavigation() {
  const [showLogin, setShowLogin] = useState(null)

  useEffect(() => {
    checkIfAlredyLoggedIn();
  }, [])

  const checkIfAlredyLoggedIn = async () => {
    let login = await getItem("login")

    console.log(login)
    console.log(typeof login)

    if (login === "1") {
      setShowLogin(false)
    } else {
      setShowLogin(true)
    }
  }

  // IF DE SEGURANÇA - Se não tiver encontrado nada, retorna nada
  if (showLogin === null) {
    return null
  }

  // Esse IF funciona caso o usuário nunca tiver feito o  LOGIN,
  // fazendo que ele seja redirecionado para essa tela antes de ir para HOME.
  if (showLogin) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Galeria" component={Gallery} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )

    // Esse ELSE funciona caso o usuário já tenha feito na tela LOGIN,
    // fazendo que ele seja redirecionado para a tela HOME diretamente.
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
