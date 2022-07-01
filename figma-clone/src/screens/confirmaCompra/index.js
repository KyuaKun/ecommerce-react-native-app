import React from "react";
import { Container, Logo, TituloCompra } from "./styles";
import Botao from "./../../components/botao/Botao";
import Gradiente from "../../components/gradiente";

const ConfirmaCompra = () => {
  return (
    <>
    <Gradiente
        position='top'
      />
      <Logo source={require("../../../assets/img/logo.jpeg")} />
    <Container>
      <TituloCompra>Compra efetuada com sucesso!</TituloCompra>
      <Botao texto="VOLTAR" />
      <Gradiente
        position= 'bottom'
      />
    </Container>
    </>
  );
};

export default ConfirmaCompra;
