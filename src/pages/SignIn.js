import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, View, Pressable } from 'react-native';

// IMPORTAÇÃO COMPONENTES
import InputComp from '../components/InputComp';
import TextComp from '../components/TextComp';

// IMPORTANDO O ICONE
import Foundation from '@expo/vector-icons/Foundation';

import { styles } from '../styles/styles';

// IMPORTAÇÃO NATIVE
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../components/AsyncStorage';

export default function SignIn() {

  const navigation = useNavigation();

  // FAZENDO FUNÇÃO DO BOTÃO ENVIAR PARA PAGINA HOME
  const handleLogin = async () => {

    await setItem("login", "1")
    navigation.navigate("Home")
  }

  return (
    <ImageBackground style={styles.containerSI} source={require("../images/LoginScreen.jpg")}>

      <Foundation name="mountains" size={70} color="#345577" style={{ bottom: 190, right: 130 }} />

      <Text style={styles.tituloSI}>ACESSE SUA CONTA!</Text>
      <Text style={styles.subTituloSI}> Bem vindo de volta usuário!</Text>

      <View style={styles.campo}>
        <TextComp txt="Email:" />
        <InputComp textPlaceHolder={"Digite seu email"} password={false} />
        <TextComp txt="Senha:" />
        <InputComp textPlaceHolder={"Digite sua senha"} password={true} />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.btnSI} >
        <Text style={styles.cadastroSI}> ENTRARXXX </Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}
