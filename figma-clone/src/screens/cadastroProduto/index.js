import React from "react";
import {ReactFragment} from "react-native"
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footerMenu/FooterMenu"
import { Container } from "./styles";
import { InserirImagem } from "../../components/inserirImagem/InserirImagem";


const CadastroProduto = () => {
  return (
    <React.Fragment>
       <Navbar titulo="Cadastro de Produto" />
    <Container>
     
      <Input placeholder="Nome" />
      <Input placeholder="Preco R$" />
      <Input placeholder="Quantidade em estoque" />
      <Input placeholder="Imagem" />
      <InserirImagem></InserirImagem>
      <Botao texto="CADASTRAR" />
      <Footer />
    </Container>
    <Navbar titulo="Favoritos" />
    </React.Fragment>
  );
};

export default CadastroProduto;
