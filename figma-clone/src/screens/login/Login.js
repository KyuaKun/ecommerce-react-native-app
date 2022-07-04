import React from "react";
import Input from "../../components/input/Input";
import { InputSenha } from "../../components/inputSenha";
import Botao from "../../components/botao/Botao";
import { Container, Logo, TituloLogin, TextInfo, TextLink } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Gradiente } from "./../../components/gradiente/index";

const Login = () => {
  const nav = useNavigation();

  function telaRecuperarSenha() {
    nav.navigate("RecuperarSenha");
  }

  function telaCadastro() {
    nav.navigate("Cadastro");
  }

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  return (
    <Container>
      <Gradiente position="top" />
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloLogin>Login</TituloLogin>
      <Input placeholder="Digite seu login" />
      <InputSenha placeholder="Digite sua senha" />
      <TextInfo onPress={telaRecuperarSenha}>
        <TextLink>Esqueceu a sua senha? Clique aqui!</TextLink>
      </TextInfo>
      <Botao onPress={telaMarketplace} texto="ENTRAR" />
      <TextInfo onPress={telaCadastro}>
        <TextLink>Não possui cadastro? Cadastre-se!</TextLink>
      </TextInfo>
      <Gradiente position="bottom" />
    </Container>
  );
};

export default Login;
