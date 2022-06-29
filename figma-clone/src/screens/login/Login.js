import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../../components/input/Input";
import Botao from "../../components/botao/Botao";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Logo, TituloLogin, TextoPergunta } from "./styles";
import { SafeAreaView } from "react-native";

const Login = () => {
  return (
    <>
      <LinearGradient
        style={{
          flex: 1,
        }}
        start={{ x: 0.2, y: -1 }}
        end={{ x: 0.2, y: 2.5 }}
        locations={[0.3, 0.6]}
        colors={["#00ffff59", "#ffff"]}
      />
      <Container>
        <Logo source={require("../../../assets/img/logo.jpeg")} />
        <TituloLogin>Login</TituloLogin>
        <Input placeholder="Digite seu login" />
        <Input placeholder="Digite sua senha" />
        <MaterialCommunityIcons
          name="eye"
          size={24}
          color="#120a8f"
          style={{
            marginLeft: "180px",
            alignSelf: "center",
          }}
        />
        <TextoPergunta>Esqueceu a senha? Clique aqui!</TextoPergunta>
        <Botao texto="ENTRAR" />
        <TextoPergunta>Não possui cadastro? Cadastre-se!</TextoPergunta>
      </Container>

      <LinearGradient
        style={{
          flex: 1,
        }}
        start={{ x: 0.2, y: 0.6 }}
        end={{ x: 0.2, y: -0.1 }}
        locations={[0.3, 0.9]}
        colors={["#00ffff59", "#ffff"]}
      ></LinearGradient>
    </>
  );
};

export default Login;
