import React from "react";
import { Container, Logo, TituloSenha } from "./styles";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";

const RecuperarSenha = () => {
  return (
    <Container>
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloSenha>Recuperar Senha</TituloSenha>
      <Input placeholder="Digite seu CPF" />
      <Botao texto="RECUPERAR" />
    </Container>
  );
};

export default RecuperarSenha;
