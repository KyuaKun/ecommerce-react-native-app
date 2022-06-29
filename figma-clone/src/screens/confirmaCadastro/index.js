import React from "react";
import { Container, Logo, TituloCadastro } from "./styles";
import Botao from "./../../components/botao/Botao";

const ConfirmaCadastro = () => {
  return (
    <Container>
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloCadastro>Usuário cadastrado com sucesso!</TituloCadastro>
      <Botao texto="LOGIN" />
    </Container>
  );
};

export default ConfirmaCadastro;
