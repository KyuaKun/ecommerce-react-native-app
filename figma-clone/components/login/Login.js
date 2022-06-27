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

const Login = () => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      start={{ x: 270, y: 270 }}
      end={{ x: 250, y: 0.5 }}
      locations={[0, 0.4, 0.6]}
      colors={["#00ffff59", "#ffff"]}
    >
      <Container>
        <Logo source={require("../../assets/img/logo.jpeg")} />
        <TituloLogin>Login</TituloLogin>
        <TextoInput placeholder="Digite seu login" />
        <TextoInput placeholder="Digite sua senha" />
        <TextoPergunta>Esqueceu a senha? Clique aqui!</TextoPergunta>
        <BotaoEntrar>
          <TextoEntrar>ENTRAR</TextoEntrar>
        </BotaoEntrar>
        <TextoPergunta>Não possui cadastro? Cadastre-se!</TextoPergunta>
      </Container>
    </LinearGradient>
  );
};

export default Login;