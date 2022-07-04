import React from "react";
import { Container, Logo, TituloSenha } from "./styles";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Gradiente from "../../components/gradiente";
import { useNavigation } from "@react-navigation/native";

const RecuperarSenha = () => {
  const nav = useNavigation();

  function telaCriaSenha() {
    nav.navigate("CriaSenha");
  }

  return (
    <Container>
      <Gradiente position="top" />
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloSenha>Recuperar Senha</TituloSenha>
      <Input placeholder="Digite seu CPF" />
      <Botao onPress={telaCriaSenha} texto="RECUPERAR" />
      <Gradiente position="bottom" />
    </Container>
  );
};

export default RecuperarSenha;
