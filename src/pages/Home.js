import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, Pressable, View } from 'react-native';

// IMPORTANDO O ICONE
import Foundation from '@expo/vector-icons/Foundation';

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
    navigation.push("Onboarding");
    await removeItem("onboarded");
  }

  return (
    <ImageBackground style={styles.container} source={require("../images/menu2.jpg")}>

      <Foundation name="mountains" size={120} color="#44704a" style={{ bottom: 80 }} />

      <Text style={styles.titulo}>BEM VINDO</Text>
      <Text style={styles.subTitulo}> Aventuras mais seguras, baratas e relaxantes para o usuário.</Text>

      <TouchableOpacity style={styles.btn} onPress={() => Navigation.navigate("signIn")}>
        <Text style={styles.login}>Entrar com o EMAIL</Text>
      </TouchableOpacity>

      <View style={styles.div}>
        <Text style={styles.details}>Não tem uma conta ainda?</Text>
        <Pressable onPress={() => Navigation.navigate("signUp")}><Text style={{ color: "blue", fontWeigh: "bold" }}> Crie uma aqui! </Text></Pressable>
      </View>

    </ImageBackground>
  );
}
