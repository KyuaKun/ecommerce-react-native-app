import React from "react";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";

const CadastroCategoria = () => {
  return (
    <Container>
      <Navbar titulo="Cadastro de Categoria" />
      <Input placeholder="Nome" />
      <Input placeholder="Imagem" />
      <Botao texto="CADASTRAR" />
    </Container>
  );
};

export default CadastroCategoria;
