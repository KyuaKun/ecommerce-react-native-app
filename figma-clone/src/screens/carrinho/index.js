import {
  StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import Footer from "../../components/footerMenu/FooterMenu";
import Navbar from "../../components/navbar/Navbar";
import {
  BuyInfo,
  Column,
  Container,
  Content,
  Description, LowerInfo, Price, Shop, UpperInfo
} from "./styles";

const Carrinho = () => {
  return (
    <Container>
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
                    <Text style={style.txtBtn}> + </Text>
                  </TouchableOpacity>
                  <Description> 2 </Description>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> - </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> + </Text>
                  </TouchableOpacity>
                  <Description> 1 </Description>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> - </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> + </Text>
                  </TouchableOpacity>
                  <Description> 1 </Description>
                  <TouchableOpacity style={style.btn}>
                    <Text style={style.txtBtn}> - </Text>
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
                <Description>R$ 25,00</Description>
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
                <Description>R$ 180,00</Description>
                <Description>17/04/2022</Description>
              </Price>
            </LowerInfo>
          </BuyInfo>
        </Content>
        <Footer />
    </Container>
  );
};

const style = StyleSheet.create({
  btn: {
    borderColor: "blue",
    borderWidth: 2,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    fontSize: 12,
    color: "#120a8f",
    fontWeight: "900",
    textAlign: "center",
    position: "relative",
    bottom: 3,
  },
});

export default Carrinho;
