import React from "react";
import { Container, Logo, TituloSenha } from "./styles";
import Input from "../../components/input/Input";
import Botao from "../../components/botao/Botao";
import Gradiente from "../../components/gradiente";
import { useNavigation } from "@react-navigation/native";
import { InputSenha } from "./../../components/inputSenha/index";

const CriaSenha = () => {
  const nav = useNavigation();

  function telaConfirmaSenha() {
    nav.navigate("ConfirmaSenha");
  }

  return (
    <Container>
      <Gradiente position="top" />
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloSenha>Criar Senha</TituloSenha>
      <InputSenha placeholder="Digite sua nova senha" />
      <InputSenha placeholder="Repita sua nova senha" />
      <Botao onPress={telaConfirmaSenha} texto="ALTERAR" />
      <Gradiente position="bottom" />
    </Container>
  );
};

export default CriaSenha;
