import React from "react";
import {ReactFragment} from "react-native";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";

const CadastroCategoria = () => {
  return (
    <React.Fragment>
    <Container>
      <Navbar titulo="Cadastro de Categoria" />
      <Input placeholder="Nome" />
      <Input placeholder="Imagem" />
      <Botao texto="CADASTRAR" />
    </Container>
    </React.Fragment>
  );
};

export default CadastroCategoria;
