import React from "react";
import Botao from "../../components/botao/Botao";
import Footer from "../../components/footerMenu/FooterMenu";
import Gradiente from "../../components/gradiente";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AlteraProduto = () => {
  const nav = useNavigation();

  function telaProdutos() {
    nav.navigate("Produtos");
  }

  return (
    <>
      <Gradiente position="top" />
      <Navbar titulo="Alterar Produto" />
      <Container>
        <Input placeholder="Produto 1" />
        <Input placeholder="25,00" />
        <Input placeholder="10" />
        <Input placeholder="Imagem1.png" />
        <Botao onPress={telaProdutos} texto="ALTERAR" />
        <Gradiente position="bottom" />
      </Container>
      <Footer />
    </>
  );
};

export default AlteraProduto;
