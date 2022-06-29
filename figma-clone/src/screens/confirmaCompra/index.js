import React from "react";
import { Container, Logo, TituloCompra } from "./styles";
import Botao from "./../../components/botao/Botao";

const ConfirmaCompra = () => {
  return (
    <Container>
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloCompra>Compra efetuada com sucesso!</TituloCompra>
      <Botao texto="VOLTAR" />
    </Container>
  );
};

export default ConfirmaCompra;
