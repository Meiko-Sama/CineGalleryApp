import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from '../styles/styles';

// IMPORTAÇÃO DO NAVIGATION
import { useNavigation } from '@react-navigation/native';

//IMPORTAÇÃO DO ASYNC STORAGE
import { removeItem } from '../components/AsyncStorage';

//IMPORTAÇÃO PAGINA GALERIA


export default function Home() {

  // DECLARANDO O NAVIGATION
  const navigation = useNavigation();

  // FAZENDO FUNÇÃO DO BOTÃO ENVIAR PARA PAGINA HOME
  const handleReset = async () => {
    await removeItem("login");
    navigation.navigate("Home")
  }

  // FUNÇÃO PARA DIRECIONAR PARA PAGINA DE GALERIA DE FILMES
  const Gallery = async () => {
    navigation.navigate("Gallery")
  }

  return (
    <ImageBackground style={styles.container}>

      <Text> BEM VINDO A TELA HOME! </Text>

      <TouchableOpacity onPress={Gallery} style={styles.resetButton}>
        <Text>Ir para a Galeria</Text>
      </TouchableOpacity>

      {/* TEORICAMENTE AQUI É ONDE O REMOVE ITEM DEVE FICAR */}
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>SAIR</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}
