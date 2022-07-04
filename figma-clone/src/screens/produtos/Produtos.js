import { Container, ContainerProdutos } from "./styles";
import Footer from "./../../components/footerMenu/FooterMenu";
import { Navbar } from "./../../components/navbar/Navbar";
import { Cards } from "../../components/cards/Cards";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { Gradiente } from "../../components/gradiente/index";
import React from "react";

const Produtos = () => {
  const nav = useNavigation();

  function telaCadastroProduto() {
    nav.navigate("CadastroProduto");
  }

  return (
    <>
      <Gradiente position="top" />
      <Navbar titulo="Produtos" />
      <Container>
        <TouchableOpacity
          onPress={telaCadastroProduto}
          style={{ marginLeft: "15px" }}
        >
          <AntDesign name="plus" size={18} color="darkblue" />
        </TouchableOpacity>
        <ContainerProdutos>
          <Cards
            path={require("../../../assets/img/1.jpg")}
            nome="Produto 1"
            preco="R$25,00"
            estoque="10 unidades em estoque"
            contador="2"
          />
          <Cards
            path={require("../../../assets/img/2.png")}
            nome="Produto 2"
            preco="R$50,00"
            estoque="1 unidade em estoque"
            contador="0"
          />
        </ContainerProdutos>
        <ContainerProdutos>
          <Cards
            path={require("../../../assets/img/3.jpg")}
            nome="Produto 3"
            preco="R$30,00"
            estoque="5 unidades em estoque"
            contador="0"
          />

          <Cards
            path={require("../../../assets/img/4.jpg")}
            nome="Produto 4"
            preco="R$100,00"
            estoque="15 unidades em estoque"
            contador="1"
          />
        </ContainerProdutos>
        <ContainerProdutos>
          <Cards
            path={require("../../../assets/img/5.jpg")}
            nome="Produto 5"
            preco="R$40,00"
            estoque="20 unidades em estoque"
            contador="1"
          />
          <Cards
            path={require("../../../assets/img/6.jpg")}
            nome="Produto 6"
            preco="R$70,00"
            estoque="8 unidades em estoque"
            contador="0"
          />
        </ContainerProdutos>
      </Container>
      <Footer />
    </>
  );
};

export default Produtos;
