import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, Pressable, View } from 'react-native';

import { styles } from '../styles/styles';

// IMPORTAÇÃO DO NAVIGATION
import { useNavigation } from '@react-navigation/native';

//IMPORTAÇÃO DO ASYNC STORAGE
import { removeItem } from '../components/AsyncStorage';

export default function Menu() {

  // DECLARANDO O NAVIGATION
  const Navigation = useNavigation();

  // FAZENDO FUNÇÃO DO BOTÃO ENVIAR PARA PAGINA HOME
  const handleReset = async () => {
    Navigation.push("Login");
    await removeItem("login");
  }

  return (
    <ImageBackground style={styles.container}>

      <Text> BEM VINDO A TELA HOME! </Text>

      <TouchableOpacity onPress={Galeria} style={styles.resetButton}>
        <Text>Ir para a Galeria</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>RESET</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}
