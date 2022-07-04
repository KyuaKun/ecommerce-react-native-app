import {
  Container,
  Content,
  Item,
  ItemDescription,
  TextInfo,
  TextStock,
  FavImage,
} from "./styles";
import Navbar from "../../components/navbar/Navbar";
import Gradiente from "../../components/gradiente";
import Footer from "../../components/footerMenu/FooterMenu";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Favoritos = () => {
  return (
    <>
      <Container>
        <Gradiente position="top" />
        <Navbar titulo="Favoritos" />
        <Content>
          <Item>
            <FavImage source={require("../../../assets/img/2.png")} />
            <ItemDescription>
              <TextInfo>Produto 2</TextInfo>
              <TextInfo>Preço R$ 50,00</TextInfo>
              <TextStock>1 unidade em estoque</TextStock>
            </ItemDescription>
            <TouchableOpacity>
              <AntDesign
                name="close"
                size={18}
                color="#120a8f"
                style={{ alignSelf: "flex-end" }}
              />
            </TouchableOpacity>
          </Item>
          <Item>
            <FavImage source={require("../../../assets/img/5.jpg")} />
            <ItemDescription>
              <TextInfo>Produto 5</TextInfo>
              <TextInfo>Preço R$ 40,00</TextInfo>
              <TextStock>20 unidades em estoque</TextStock>
            </ItemDescription>
            <TouchableOpacity>
              <AntDesign
                name="close"
                size={18}
                color="#120a8f"
                style={{ alignSelf: "flex-end" }}
              />
            </TouchableOpacity>
          </Item>
          <Item>
            <FavImage source={require("../../../assets/img/6.jpg")} />
            <ItemDescription>
              <TextInfo>Produto 6</TextInfo>
              <TextInfo>Preço R$ 70,00</TextInfo>
              <TextStock>8 unidades em estoque</TextStock>
            </ItemDescription>
            <TouchableOpacity>
              <AntDesign
                name="close"
                size={18}
                color="#120a8f"
                style={{ alignSelf: "flex-end" }}
              />
            </TouchableOpacity>
          </Item>
        </Content>
        <Gradiente position="bottom" />
      </Container>
      <Footer />
    </>
  );
};

export default Favoritos;
