import React from "react";
import { Container, Logo, TituloSenha } from "./styles";
import Botao from "./../../components/botao/Botao";
import Gradiente from "../../components/gradiente";

const ConfirmaSenha = () => {
  return (
    <Container>
      <Gradiente
       position='top'
        />
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloSenha>Senha alterada com sucesso!</TituloSenha>
      <Botao texto="LOGIN" />
      <Gradiente
      position= 'bottom'
      />
    </Container>
  );
};

export default ConfirmaSenha;
