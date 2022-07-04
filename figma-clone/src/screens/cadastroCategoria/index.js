import React from "react";
import { ReactFragment } from "react-native";
import Gradiente from "../../components/gradiente/index";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { InserirImagem } from "../../components/inserirImagem/InserirImagem";

const CadastroCategoria = () => {
  const nav = useNavigation();

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  return (
    <React.Fragment>
      <Gradiente position="top"></Gradiente>
      <Navbar titulo="Cadastro de Categoria" />
      <Container>
        <Input placeholder="Nome" />
        <Input placeholder="Imagem" />
        <InserirImagem />
        <Botao onPress={telaMarketplace} texto="CADASTRAR" />
      </Container>
      <Gradiente position="bottom"></Gradiente>
    </React.Fragment>
  );
};

export default CadastroCategoria;
