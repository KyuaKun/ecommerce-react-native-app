import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Footer from "../../components/footerMenu/FooterMenu";
import Gradiente from "../../components/gradiente/index";
import Navbar from "../../components/navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import {
  BuyInfo,
  Column,
  Container,
  Content,
  Description,
  LowerInfo,
  Price,
  Shop,
  UpperInfo,
  CustomButton,
  TextButton,
  ContainerButton,
} from "./styles";

const Carrinho = () => {
  const nav = useNavigation();

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  function telaConfirmaCompra() {
    nav.navigate("ConfirmaCompra");
  }

  return (
    <>
      <Container>
        <Gradiente position="top" />
        <Navbar titulo="Carrinho" />
        <Content>
          <BuyInfo>
            <UpperInfo>
              <Column>
                <Description>Produto</Description>
                <Description>Produto 1</Description>
                <Description>Produto 4</Description>
                <Description>Produto 5</Description>
              </Column>
              <Column>
                <Description>Quantidade</Description>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> - </Text>
                  </TouchableOpacity>
                  <Description> 2 </Description>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> + </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> - </Text>
                  </TouchableOpacity>
                  <Description> 1 </Description>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> + </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> - </Text>
                  </TouchableOpacity>
                  <Description> 1 </Description>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> + </Text>
                  </TouchableOpacity>
                </View>
              </Column>
              <Column>
                <Description>Preço Unitário</Description>
                <Description>R$ 25,00</Description>
                <Description>R$ 100,00</Description>
                <Description>R$ 40,00</Description>
              </Column>
              <Column>
                <Description>Total</Description>
                <Description>R$ 50,00</Description>
                <Description>R$ 100,00</Description>
                <Description>R$ 40,00</Description>
              </Column>
            </UpperInfo>
            <LowerInfo>
              <Shop>
                <Description>Total da compra</Description>
                <Description>Data da compra</Description>
              </Shop>
              <Price>
                <Description>R$ 190,00</Description>
                <Description>17/06/2022</Description>
              </Price>
            </LowerInfo>
          </BuyInfo>
          <ContainerButton>
            <CustomButton onPress={telaMarketplace}>
              <TextButton>ADICIONAR MAIS ITENS</TextButton>
            </CustomButton>
            <CustomButton onPress={telaConfirmaCompra}>
              <TextButton>FECHAR PEDIDO</TextButton>
            </CustomButton>
          </ContainerButton>
        </Content>
        <Footer />
        <Gradiente position="bottom" />
      </Container>
    </>
  );
};

const style = StyleSheet.create({
  btn: {
    borderColor: "#120a8f",
    borderWidth: 1.5,
    width: 15,
    height: 15,
    borderRadius: 8,
  },
  txtBtn: {
    fontSize: 11,
    color: "#120a8f",
    fontWeight: "900",
    textAlign: "center",
    position: "relative",
    bottom: 2.75,
  },
});

export default Carrinho;
