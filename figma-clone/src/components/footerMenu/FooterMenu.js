import React from "react";
import { Container } from "./styles";
import { View } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Footer = (props) => {
  let homeAtivo = props.homeAtivo ? "blue" : "grey";
  let bagAtivo = props.bagAtivo ? "blue" : "grey";
  let starAtivo = props.starAtivo ? "blue" : "grey";
  let shoppingAtivo = props.shoppingAtivo ? "blue" : "grey";

  const nav = useNavigation();

  function telaProdutos() {
    nav.navigate("Produtos");
  }

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  function telaFavoritos() {
    nav.navigate("Favoritos");
  }

  function telaCarrinho() {
    nav.navigate("Carrinho");
  }

  return (
    <View>
      <Container>
        <TouchableOpacity onPress={telaMarketplace}>
          <Ionicons name="home-outline" size={24} color={homeAtivo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={telaProdutos}>
          <SimpleLineIcons name="bag" size={24} color={bagAtivo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={telaFavoritos}>
          <Feather name="star" size={24} color={starAtivo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={telaCarrinho}>
          <AntDesign name="shoppingcart" size={24} color={shoppingAtivo} />
        </TouchableOpacity>
      </Container>
    </View>
  );
};

export default Footer;
