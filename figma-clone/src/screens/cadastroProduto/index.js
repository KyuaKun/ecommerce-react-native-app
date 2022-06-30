import React from "react";
import Botao from "../../components/botao/Botao";
import Footer from "../../components/footerMenu/FooterMenu";
import Gradiente from "../../components/gradiente";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";

const CadastroProduto = () => {
  return (
    <>
    <Gradiente
       position='top'
        />
    <Navbar titulo="Cadastro de Produto" />
    <Container>
      <Input placeholder="Nome" />
      <Input placeholder="Preço R$" />
      <Input placeholder="Quantidade em estoque" />
      <Input placeholder="Imagem" />
      <Botao texto="CADASTRAR" />
    </Container>
    <Gradiente
    position= 'bottom'
    />
    <Footer/>
    </>
  );
};

export default CadastroProduto;
