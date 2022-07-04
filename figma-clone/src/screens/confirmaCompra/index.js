import React from "react";
import { Container, Logo, TituloCompra } from "./styles";
import Botao from "./../../components/botao/Botao";
import Gradiente from "../../components/gradiente";
import { useNavigation } from "@react-navigation/native";

const ConfirmaCompra = () => {
  const nav = useNavigation();

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  return (
    <>
      <Gradiente position="top" />
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <Container>
        <TituloCompra>Compra efetuada com sucesso!</TituloCompra>
        <Botao onPress={telaMarketplace} texto="VOLTAR" />
        <Gradiente position="bottom" />
      </Container>
    </>
  );
};

export default ConfirmaCompra;
