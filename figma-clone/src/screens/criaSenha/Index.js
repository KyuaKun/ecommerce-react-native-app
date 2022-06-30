import React from "react";
import { Container, Logo, TituloSenha } from "./styles";
import Input from "../../components/input/Input";
import Botao from "../../components/botao/Botao";
import Gradiente from "../../components/gradiente";

const CriaSenha = () => {
  return (
    <Container>
      <Gradiente
        position='top'
        />
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloSenha>Criar Senha</TituloSenha>
      <Input placeholder="Digite sua nova senha" />
      <Input placeholder="Repita sua nova senha" />
      <Botao texto="ALTERAR" />
      <Gradiente
        position= 'bottom'
      />
    </Container>
  );
};

export default CriaSenha;
