import React from "react";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";

const CadastroProduto = () => {
  return (
    <Container>
      <Navbar titulo="Cadastro de Produto" />
      <Input placeholder="Nome" />
      <Input placeholder="Preço R$" />
      <Input placeholder="Quantidade em estoque" />
      <Input placeholder="Imagem" />
      <Botao texto="CADASTRAR" />
    </Container>
  );
};

export default CadastroProduto;
