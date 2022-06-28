import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Logo,
  TituloLogin,
  TextoInput,
  TextoPergunta,
  BotaoEntrar,
  TextoEntrar,
} from "./styles";
import { SafeAreaView } from "react-native";

const Login = () => {
  return (
    <>
    <LinearGradient
      style={{
        flex: 1,
      }}
      start={{ x: 0.2, y: -1 }}
      end={{ x: 0.2, y: 2.5}}
      locations={[0.3, 0.6]}
      colors={["#00ffff59", "#ffff"]}
    />
      <Container>
        <Logo source={require("../../../assets/img/logo.jpeg")} />
        <TituloLogin>Login</TituloLogin>
        <TextoInput placeholder="Digite seu login" />
        <TextoInput placeholder="Digite sua senha" />
        <TextoPergunta>Esqueceu a senha? Clique aqui!</TextoPergunta>
        <BotaoEntrar>
          <TextoEntrar>ENTRAR</TextoEntrar>
        </BotaoEntrar>
        <TextoPergunta>Não possui cadastro? Cadastre-se!</TextoPergunta>
      </Container>

      <LinearGradient
      style={{
        flex: 1,
      }}
      start={{ x: 0.2, y: 0.6 }}
      end={{ x: 0.2, y: -0.1}}
      locations={[0.3, 0.9]}
      colors={[ "#00ffff59", "#ffff"]}>
    </LinearGradient>
    </>
  );
};

export default Login;