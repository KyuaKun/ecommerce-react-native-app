import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Container, Logo, TituloSenha } from "./styles";
import Input from "../../components/input/Input";
import Botao from "../../components/botao/Botao";

const Senha = () => {
  return (
    <Container>
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloSenha>Criar Senha</TituloSenha>
      <Input placeholder="Digite sua nova senha" />
      <Input placeholder="Repita sua nova senha" />
      <Botao texto="ALTERAR" />
    </Container>
  );
};

export default Senha;
