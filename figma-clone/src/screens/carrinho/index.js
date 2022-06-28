import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/navbar/Navbar";

const Container = styled.View`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;

const BuyInfo = styled.View`
  border: 1px solid blue;
  width: 90%;
  min-height: 300px;
  flex-direction: column;
  justify-content: space-around;
`;

const FinalInfo = styled.View`

`;

const Coluna = styled.View`
  border: 1px solid black;
  align-items: center;
  height: 95%;
  width: 25%;
`;

const Description = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 12;
`;

const Carrinho = () => {
  return (
    <Container>
      <Navbar titulo="Carrinho" />
      <Content>
        <BuyInfo>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Coluna>
              <Description>Produto</Description>
            </Coluna>
            <Coluna>
              <Description>Quantidade</Description>
            </Coluna>
            <Coluna>
              <Description>Preço Unitário</Description>
            </Coluna>
            <Coluna>
              <Description>Total</Description>
            </Coluna>
          </View>
          <View style={{ flexDirection: "row", height: "15%" }}>
            <FinalInfo>
              <Description>Total de compra</Description>
              <Description>Data da compra</Description>
            </FinalInfo>

            <FinalInfo>
              <Description>R$ 190,00</Description>
              <Description>17/06/2022</Description>
            </FinalInfo>
          </View>
        </BuyInfo>
      </Content>
    </Container>
  );
};

export default Carrinho;
