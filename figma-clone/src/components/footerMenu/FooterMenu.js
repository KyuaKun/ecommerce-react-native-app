import React from "react";
import { Container } from "./styles"
import { View, Text, Image } from "react-native";
import { AntDesign, Feather,Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import styled from "styled-components/";


const Footer = () => {
  return (
    <View >
      <Container>
      <Ionicons name="home-outline" size={24} color="grey" />
      <Feather name="star" size={24} color="grey" />
      <SimpleLineIcons name="bag" size={24} color="grey" />
      <AntDesign name="shoppingcart" size={24} color="grey" />
      </Container>
    </View>
  );
};

export default Footer;
