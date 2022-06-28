import React from "react";
import { View, Image } from "react-native";
import { Container, Navbar, TitleFavoritos, Icon, Content } from "./styles";

const Favoritos = () => {
  return (
    <Container>
      <Navbar>
        <Icon>Icone</Icon>
        <TitleFavoritos>Favoritos</TitleFavoritos>
        <Image
          source={require("../../assets/img/logo.jpeg")}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </Navbar>
      <Content></Content>
    </Container>
  );
};

export default Favoritos;
