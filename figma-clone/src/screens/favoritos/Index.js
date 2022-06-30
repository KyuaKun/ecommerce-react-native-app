import { Image, Text } from "react-native";
import { Container, Content, Item, ItemDescription } from "./styles";
import Navbar from "../../components/navbar/Navbar";
import Gradiente from "../../components/gradiente";
import Footer from "../../components/footerMenu/FooterMenu";

const Favoritos = () => {
  return (
    <Container>
      <Gradiente
          position='top'
      />
      <Navbar titulo="Favoritos" />
    {/* <Container> */}
      
      <Content>
        <Item>
          <Image
            source={require("../../../assets/img/2.png")}
            style={{ width: "40%", height: "100%", borderRadius: 10 }}
          />
          <ItemDescription>
            <Text
              style={{ fontWeight: "bold", color: "#120a8f", fontSize: 16 }}
            >
              Produto 2
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#120a8f", fontSize: 16 }}
            >
              Preço R$ 50,00
            </Text>
            <Text style={{ color: "#120a8f", fontSize: 13 }}>
              1 unidade em estoque
            </Text>
          </ItemDescription>
        </Item>
        <Item>
          <Image
            source={require("../../../assets/img/5.jpg")}
            style={{ width: "40%", height: "100%", borderRadius: 10 }}
          />
          <ItemDescription>
            <Text
              style={{ fontWeight: "bold", color: "#120a8f", fontSize: 16 }}
            >
              Produto 5
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#120a8f", fontSize: 16 }}
            >
              Preço R$ 40,00
            </Text>
            <Text style={{ color: "#120a8f", fontSize: 13 }}>
              20 unidades em estoque
            </Text>
          </ItemDescription>
        </Item>
        <Item>
          <Image
            source={require("../../../assets/img/6.jpg")}
            style={{ width: "40%", height: "100%", borderRadius: 10 }}
          />
          <ItemDescription>
            <Text
              style={{ fontWeight: "bold", color: "#120a8f", fontSize: 16 }}
            >
              Produto 6
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#120a8f", fontSize: 16 }}
            >
              Preço R$ 70,00
            </Text>
            <Text style={{ color: "#120a8f", fontSize: 13 }}>
              8 unidades em estoque
            </Text>
          </ItemDescription>
        </Item>
      </Content>
      <Gradiente
        position= 'bottom'
      />
    <Footer/>
    </Container>
  );
};

export default Favoritos;
