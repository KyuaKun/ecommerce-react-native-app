import React from "react";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";

const AlteraProduto = () => {
  return (
    <Container>
      <Navbar titulo="Alterar Produto" />
      <Input placeholder="Produto 1" />
      <Input placeholder="25,00" />
      <Input placeholder="10" />
      <Input placeholder="Imagem1.png" />
      <Botao texto="ALTERAR" />
    </Container>
  );
};

export default AlteraProduto;
