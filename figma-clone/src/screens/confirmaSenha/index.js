import React from "react";
import { Container, Logo, TituloSenha } from "./styles";
import Botao from "./../../components/botao/Botao";

const ConfirmaSenha = () => {
  return (
    <Container>
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloSenha>Senha alterada com sucesso!</TituloSenha>
      <Botao texto="LOGIN" />
    </Container>
  );
};

export default ConfirmaSenha;
